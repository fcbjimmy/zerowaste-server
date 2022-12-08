const Sequelize = require("sequelize");

// const URI = `${process.env.DB_DIALECT}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
// console.log(process.env.DB_DIALECT);
// const sequelize = new Sequelize(URI);

const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER_NAME,
  process.env.DB_PASS,
  {
    host: process.env.HOST,
    dialect: "postgres",
  }
);

module.exports = sequelize;
