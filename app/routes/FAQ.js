const express = require('express');
const router = express.Router();
const FAQController = require('../controllers/FAQ');

// Retrieve all FAQs
router.get('/', FAQController.getAllFAQs);

// Create a new FAQ
router.post('/', FAQController.createFAQ);

// Update an existing FAQ
router.put('/:id', FAQController.updateFAQ);

// Delete a FAQ
router.delete('/:id', FAQController.deleteFAQ);

module.exports = router;