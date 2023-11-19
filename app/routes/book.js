const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book');

// Retrieve all booking history
router.get('/', bookController.getBooks);

// Create a new booking
router.post('/', bookController.createBook);

// Update an existing booking
router.put('/:id', bookController.updateBook);

// Delete a booking
router.delete('/:id', bookController.deleteBook);

module.exports = router;