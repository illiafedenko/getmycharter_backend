const express = require('express');
const router = express.Router();

const userRouter = require('./users');
const yachtRouter = require('./yacht');

router.use('/users', userRouter);
// router.use('/yachts', yachtRouter);


module.exports = router;
