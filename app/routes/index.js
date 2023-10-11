const express = require('express');
const router = express.Router();

const userRouter = require('./users');
const yachtRouter = require('./yacht');
const policyRouter = require('./policy');
const termsRouter = require('./terms');
const FAQRouter = require('./FAQ');

router.use('/users', userRouter);
router.use('/yachts', yachtRouter);
router.use('/policy', policyRouter);
router.use('/terms', termsRouter);
router.use('/FAQ', FAQRouter);

module.exports = router;
