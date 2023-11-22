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
    const books = await Book.findAll({ where: condition });
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
    if (updatedBook[0] == 1) {
      res.status(200).json({ status: 200 });
    } else {
      res.status(200).json({ status: 300 });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Book.destroy({ where: { id } });
    if (response == 1) {
      res.status(200).json({ status: 200 });

    } else {
      res.status(200).json({ status: 300 });
    }

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
