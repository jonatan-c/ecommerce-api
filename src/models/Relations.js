const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Tablas
db.productsDB = require("./Products.model");
db.usersDB = require("./Users.model");
db.categoriesDB = require("./Categories.model");
// db.ordersStatus= require("./OrdersStatus.model");
db.addressDB = require("./Address.model");
db.tableManyManyAddressUsersDB = require("./TableManyManyAddressUsers.model");
db.paymentMethodsDB = require("./PaymentMethods.model");

//************** Relaciones One-To-Many ; 1 categoria puede tener muchas productos. Ej: intel y razer ambos son categorias procesador.
db.categoriesDB.hasMany(db.productsDB, {
  as: "products",
  foreignKey: "id_category",
});
db.productsDB.belongsTo(db.categoriesDB, {
  as: "category",
  foreignKey: "id_category",
});

//************** Relaciones Many-To-Many ; muchas direcciones pueden tener muchos usuarios. Ej: user 1 puede tener caller 1, calle 2 , calle 3 y El usuario 2 puede tener calle 1 y calle 54.
db.addressDB.belongsToMany(db.usersDB, {
  as: "users",
  through: { model: db.tableManyManyAddressUsersDB, unique: false },
  foreignKey: "id_address",
});
db.usersDB.belongsToMany(db.addressDB, {
  as: "addresses",
  through: { model: db.tableManyManyAddressUsersDB, unique: false },
  foreignKey: "id_user",
});

module.exports = db;
