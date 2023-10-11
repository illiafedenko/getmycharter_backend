const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

//login by email
router.post('/login', authController.login);

//Sign up by email
router.post('/signup', authController.signup);

// Google Login
router.post('/google', authController.google);

//login by email
router.post('/logout', authController.logout);

module.exports = router;
