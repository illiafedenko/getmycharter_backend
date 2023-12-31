const express = require("express");
const router = express.Router();

const authRouter = require("./auth");
const userRouter = require("./users");
const yachtRouter = require("./yacht");
const favoriteRouter = require("./favorite");
const bookRouter = require('./book');
// const reviewRouter = require('./review');
// // const messageRouter = require('./message');
// // const stripeRouter = require('./stripe');
// const policyRouter = require('./policy');
// const termsRouter = require('./terms');
// const FAQRouter = require('./FAQ');
const assetRouter = require("./asset");

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/yachts", yachtRouter);
router.use("/favorites", favoriteRouter);
router.use('/books', bookRouter);
// router.use('/review', reviewRouter);
// router.use('/message', messageRouter);
// router.use('/stripe', stripeRouter);
// router.use('/policy', policyRouter);
// router.use('/terms', termsRouter);
// router.use('/FAQ', FAQRouter);
router.use("/asset", assetRouter);

module.exports = router;
