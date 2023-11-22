const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const YachtInfo = sequelize.define("YachtInfo", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  item: {
    // 0 => image 1 => Feature, 2 => Allow, 3 => cancellation, 4 => booking option
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  yachtID: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

module.exports = YachtInfo;
