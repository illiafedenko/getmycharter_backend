const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const User = require("./user");
const YachtInfo = require("./yachtInfo");
const Favorite = require("./favourite");
const Book = require("./book");

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
  region: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  passenger: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  length: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  bed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  captain: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  captainInfo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    // 0 => Motorboat, 1 => Sailboat, 2 => Catamaran, 3 => RIB, 4 => Yacht, 5 => Houseboat, 6 => Jet ski
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  availablity: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  power: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cabin: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  manufacturer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  about: {
    type: DataTypes.STRING,
    length: 2000,
    allowNull: false,
  },
  security_deposit: {
    type: DataTypes.STRING,
    length: 2000,
    allowNull: false,
  },
  ownerID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Yacht.belongsTo(User, { foreignKey: "ownerID" });
Yacht.hasMany(YachtInfo, { foreignKey: "yachtID" });
Yacht.hasMany(Favorite, { foreignKey: "yachtID" });
Yacht.hasMany(Book, { foreignKey: "yachtID" });

module.exports = Yacht;
