const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Policy = sequelize.define('Policy', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  updated: {
    type: DataTypes.DATE,
    allowNull: false,
  }
});

module.exports = Policy;