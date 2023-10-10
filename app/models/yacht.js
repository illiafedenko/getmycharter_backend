const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Yacht = sequelize.define("Yacht", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  availablity: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  owner: {
    type: DataTypes.UUID,
    allowNull: false,
  }
});

module.exports = Yacht;
