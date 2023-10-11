const googleOAuth = require("../services/OAuth/googleOAuth");
const bcrypt = require("bcryptjs");

const User = require("../models/user");

exports.google = async (req, res) => {
  try {
    const code = req.body.code;
    const profile = await googleOAuth.getProfileInfo(code);

    const user = {
      googleId: profile.sub,
      name: profile.name,
      firstName: profile.given_name,
      lastName: profile.family_name,
      email: profile.email,
      profilePic: profile.picture,
    };

    res.send({ user });
  } catch (e) {
    console.log(e);
    res.status(401).send();
  }
};

exports.signup = (req, res) => {
  const { name, email, password } = req.body;

  // Check for existing user
  User.findOne({ email: email }).then((user) => {
    if (user) return res.status(400).json("User already exists");

    //New User created
    const newUser = new User({
      name,
      email,
      password,
    });

    //Password hashing
    bcrypt.genSalt(12, (err, salt) =>
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;

        newUser.password = hash;
        // Save user
        newUser
          .save()
          .then(res.json("Successfully Registered"))
          .catch((err) => console.log(err));
      })
    );
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  //check for existing user
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json("Incorrect Email or Password");

    // Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json("Incorrect Email or Password");

      const sessUser = { id: user.id, name: user.name, email: user.email };
      req.session.user = sessUser; // Auto saves session data in mongo store

      res.json(sessUser); // sends cookie with sessionID automatically in response
    });
  });
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    // delete session data from store, using sessionID in cookie
    if (err) throw err;
    res.clearCookie("session-id"); // clears cookie containing expired sessionID
    res.send("Logged out successfully");
  });
};
