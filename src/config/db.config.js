require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,
    define: {
      freezeTableName: true,
    },
  }
);
const isDatabaseOn = async () => {
  try {
    await sequelize.authenticate();
    console.log("sequelize has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
isDatabaseOn();

module.exports = sequelize;
