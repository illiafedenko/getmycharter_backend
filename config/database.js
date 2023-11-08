const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("getmycharter", "root", "", {
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