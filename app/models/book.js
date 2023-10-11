const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Book = sequelize.define("Book", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  yachtID: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  userID: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = Book;
