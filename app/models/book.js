const { DataTypes, TIME } = require("sequelize");
const Sequelize = require("sequelize");

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
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    // 0 => request, 1 => approved, 2 => cancelled, 3 => completed
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = Book;
