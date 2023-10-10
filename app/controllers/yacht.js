const Yacht = require('../models/yacht');

// Retrieve all yachts
exports.getAllYachts = async (req, res) => {
  try {
    const yachts = await Yacht.findAll();
    res.json(yachts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new yacht
exports.createYacht = async (req, res) => {
  try {
    const { name, price, availability, owner } = req.body;
    const yacht = await Yacht.create({ name, price, availability, owner });
    res.status(201).json(yacht);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing yacht
exports.updateYacht = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, availability, owner } = req.body;
    const [, [updatedYacht]] = await Yacht.update(
        { name, price, availability, owner },
      { returning: true, where: { id } }
    );
    res.json(updatedYacht);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a yacht
exports.deleteYacht = async (req, res) => {
  try {
    const { id } = req.params;
    await Yacht.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};