const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Tablas
db.productsDB = require("./Products.model");
db.usersDB = require("./Users.model");
db.categoriesDB = require("./Categories.model");

//************** Relaciones One-To-Many ; 1 categoria puede tener muchas productos. Ej: intel y razer ambos son categorias procesador.
db.categoriesDB.hasMany(db.productsDB, {
  as: "products",
  foreignKey: "id_category",
});
db.productsDB.belongsTo(db.categoriesDB, {
  as: "category",
  foreignKey: "id_category",
});

module.exports = db;
