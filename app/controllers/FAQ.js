const FAQ = require("../models/FAQ");

// Retrieve all FAQ
exports.getAllFAQs = async (req, res) => {
  try {
    const FAQs = await FAQ.findAll();
    res.json(FAQs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new FAQ
exports.createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const FAQ = await FAQ.create({ question, answer });
    res.status(201).json(FAQ);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing FAQ
exports.updateFAQ = async (req, res) => {
  try {
    const { id } = req.params;
    const { question, answer } = req.body;
    const [, [updatedFAQ]] = await FAQ.update(
      { question, answer },
      { returning: true, where: { id } }
    );
    res.json(updatedFAQ);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a FAQ
exports.deleteFAQ = async (req, res) => {
  try {
    const { id } = req.params;
    await FAQ.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
