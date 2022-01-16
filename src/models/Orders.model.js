const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const ordersDB = sequelize.define(
  "orders",
  {
    id_order: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number_address: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ordersDB;
