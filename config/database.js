const Sequelize = require('sequelize');
require('dotenv').config();

module.exports = new Sequelize('getmycharter', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' // or any other supported SQL dialect
});