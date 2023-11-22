const googleOAuth = require("../services/OAuth/googleOAuth");
const encrypt = require("../utils/encrypt");

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

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ where: { email } });
  if (!existingUser)
    return res.status(201).json({ message: "Incorrect Email or Password" });
  let comparedResult = await encrypt.comparePassword(
    password,
    existingUser.password
  );
  if (comparedResult == true) {
    const sessUser = {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
    };
    return res.status(200).json({ user: sessUser });
  } else {
    return res.status(201).json("Incorrect Email or Password");
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    // delete session data from store, using sessionID in cookie
    if (err) throw err;
    res.clearCookie("session-id"); // clears cookie containing expired sessionID
    res.send("Logged out successfully");
  });
};
