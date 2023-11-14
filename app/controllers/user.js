const User = require("../models/user");
const encrypt = require("../utils/encrypt");

// Retrieve all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, type } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser == null) {
      const hashedPassword = await encrypt.encryptPassword(password);
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        type,
      });
      res.status(200).json(user);
    } else {
      res.status(201).json({ message: "email repeat" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing user
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, type } = req.body;
    const hashedPassword = await encrypt.encryptPassword(password);
    const [, [updatedUser]] = await User.update(
      { name, email, password: hashedPassword, type },
      { returning: true, where: { id } }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.status(200);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
