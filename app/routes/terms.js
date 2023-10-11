const express = require('express');
const router = express.Router();
const termsController = require('../controllers/terms');

// Retrieve Privacy Policy
router.get('/', termsController.getTerms);

// Update Privacy Policy
router.put('/', termsController.updateTerms);

module.exports = router;