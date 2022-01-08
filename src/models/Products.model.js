const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const ProductsDB = sequelize.define(
  "products",
  {
    id_product: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_product: {
      type: Sequelize.STRING,
    },
    price_product: {
      type: Sequelize.INTEGER,
    },
    description_product: {
      type: Sequelize.STRING,
    },
    stock_product: {
      type: Sequelize.INTEGER,
    },
    image_product: {
      type: Sequelize.BLOB("long"),
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ProductsDB;
