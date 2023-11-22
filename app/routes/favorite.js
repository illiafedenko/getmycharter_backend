const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favorite');

router.post('/get', favoriteController.get);

router.post('/', favoriteController.add);

router.delete('/', favoriteController.remove);

module.exports = router;