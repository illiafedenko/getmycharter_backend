const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: { // 0 is admin, 1 is user, 2 is owner
    type: DataTypes.INTEGER,
    allowNull: false 
  },
  joined: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = User;
