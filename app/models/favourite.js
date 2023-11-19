const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const User = require("./user");

const Favorite = sequelize.define('Favorite', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userID: {
    type: DataTypes.STRING,
    allowNull: false
  },
  yachtID: {
    type: DataTypes.UUID,
    allowNull: false,
  }
});

Favorite.belongsTo(User, { foreignKey: "userID" });

module.exports = Favorite;