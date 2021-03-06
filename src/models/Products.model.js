const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const ProductsDB = sequelize.define(
  "products",
  {
    id_product: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_product: {
      type: DataTypes.STRING,
    },
    price_product: {
      type: DataTypes.INTEGER,
    },
    description_product: {
      type: DataTypes.STRING,
    },
    image_product: {
      type: DataTypes.BLOB("long"),
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ProductsDB;
