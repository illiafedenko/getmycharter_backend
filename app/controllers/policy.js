const Policy = require('../models/policy');

// Retrieve Privacy Policy
exports.getPolicy = async (req, res) => {
  try {
    const policy = await Policy.findAll();
    res.json(policy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Privacy Policy
exports.updatePolicy = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const [, [updatedPolicy]] = await Policy.update(
      { content },
      { returning: true, where: { id } }
    );
    res.json(updatedPolicy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
