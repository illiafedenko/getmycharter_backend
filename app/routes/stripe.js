const express = require('express');
const router = express.Router();
const stripeController = require('../controllers/stripe');

// Charge Stripe Payment
router.post('/charge', stripeController.charge);

module.exports = router;