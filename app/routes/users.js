const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// Retrieve all users
router.get('/', userController.getAllUsers);

// Create a new user
router.post('/', userController.createUser);

// Update an existing user
router.put('/:id', userController.updateUser);

// Delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;