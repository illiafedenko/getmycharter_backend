const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message');

// Retrieve all message history
router.get('/', messageController.getAllMessages);

// Create a new message
router.post('/', messageController.createMessage);

// Update an existing message
router.put('/:id', messageController.updateMessage);

// Delete a message
router.delete('/:id', messageController.deleteMessage);

module.exports = router;