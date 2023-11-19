const Favorite = require("../models/favourite");

exports.get = async (req, res) => {
  try {
    const { userID } = req.body;
    const favorites = await Favorite.findAll({
      attributes: ["yachtID"],
      where: { userID },
    });
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.add = async (req, res) => {
  try {
    const { userID, yachtID } = req.body;
    await Favorite.create({
      userID,
      yachtID,
    });
    const favorites = await Favorite.findAll({
      attributes: ["yachtID"],
      where: { userID },
    });
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const { userID, yachtID } = req.body;

    await Favorite.destroy({ where: { yachtID, userID } });
    const favorites = await Favorite.findAll({
      attributes: ["yachtID"],
      where: { userID },
    });
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
