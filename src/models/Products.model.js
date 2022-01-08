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
    stock_product: {
      type: DataTypes.INTEGER,
    },
    // image_product: {
    //   type: DataTypes.BLOB("long"),
    // },
    category_product: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ProductsDB;
