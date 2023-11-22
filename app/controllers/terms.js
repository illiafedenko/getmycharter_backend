const Terms = require('../models/terms');

// Retrieve Terms & Conditions
exports.getTerms = async (req, res) => {
  try {
    const terms = await Terms.findAll();
    res.json(terms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Terms & Conditions
exports.updateTerms = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const [, [updatedTerms]] = await Terms.update(
      { content },
      { returning: true, where: { id } }
    );
    res.json(updatedTerms);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
