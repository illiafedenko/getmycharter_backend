const Book = require("../models/book");

// Retrieve books
exports.getBooks = async (req, res) => {
  try {
    const {
      id,
      userID,
      status,
    } = req.body;
    const condition = {};
    if (id) condition.id = id;
    if (id) condition.userID = userID;
    if (id) condition.status = status;

    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const { yachtID, userID, date, time, duration, status } = req.body;
    const book = await Book.create({
      yachtID,
      userID,
      date,
      time,
      duration,
      status,
    });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing book
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { yachtID, userID, date, time, duration, status } = req.body;
    const updatedBook = await Book.update(
      { yachtID, userID, date, time, duration, status },
      { where: { id } }
    );
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
