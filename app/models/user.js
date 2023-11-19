const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  phone: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  image: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  type: {
    // 0 is admin, 1 is user, 2 is owner
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  joined: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = User;
