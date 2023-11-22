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
    const { id, phone, type } = req.body;
    const user = await User.create({
      id,
      phone: phone ? phone : null,
      type,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing user
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { phone, type } = req.body;
    const updatedUser = await User.update(
      {
        phone: phone ? phone : null,
        type,
      },
      { where: { id } }
    );
    res.status(200).json({ status: 200 });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.status(200).json({ status: 200 });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
