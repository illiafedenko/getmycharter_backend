const Review = require("../models/review");

// Retrieve all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new review
exports.createReview = async (req, res) => {
  try {
    const { yachtID, userID, rating, comment, date } = req.body;
    const review = await Review.create({
      yachtID,
      userID,
      rating,
      comment,
      date,
    });
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing review
exports.updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { yachtID, userID, rating, comment, date } = req.body;
    const [, [updatedReview]] = await Review.update(
      yachtID,
      userID,
      rating,
      comment,
      date,
      { returning: true, where: { id } }
    );
    res.json(updatedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a review
exports.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    await Review.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
