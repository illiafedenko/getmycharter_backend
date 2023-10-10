const express = require('express');
const router = express.Router();
const yachtController = require('../controllers/yacht');

// Retrieve all yachts
router.get('/', yachtController.getAllYachts);

// Create a new yacht
router.post('/', yachtController.createYacht);

// Update an existing yacht
router.put('/:id', yachtController.updateYacht);

// Delete a yacht
router.delete('/:id', yachtController.deleteYacht);

module.exports = router;