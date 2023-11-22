const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review');

// Retrieve all reviews history
router.get('/', reviewController.getAllReviews);

// Create a new review
router.post('/', reviewController.createReview);

// Update an existing review
router.put('/:id', reviewController.updateReview);

// Delete a review
router.delete('/:id', reviewController.deleteReview);

module.exports = router;