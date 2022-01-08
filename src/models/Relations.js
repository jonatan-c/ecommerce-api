const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Tablas
db.productsDB = require("./Products.model");

module.exports = db;
