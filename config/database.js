const Sequelize = require("sequelize");
require("dotenv").config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const sequelize = new Sequelize(DB_HOST, DB_USER, DB_PASS, {
  host: "localhost",
  dialect: "mysql", // or any other supported SQL dialect,
  port: "3306",
});

sequelize
  .sync()
  .then(() => {
    console.log("Database and tables created!");
  })
  .catch((error) => {
    console.error("Error creating database and tables:", error);
  });

module.exports = sequelize;