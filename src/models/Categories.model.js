const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const CategoriesDB = sequelize.define(
  "categories",
  {
    id_category: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_category: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = CategoriesDB;
