const express = require('express');
const router = express.Router();
const policyController = require('../controllers/policy');

// Retrieve Privacy Policy
router.get('/', policyController.getPolicy);

// Update Privacy Policy
router.put('/', policyController.updatePolicy);

module.exports = router;