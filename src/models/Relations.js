const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Tablas
db.productsDB = require("./Products.model");
db.usersDB = require("./Users.model");
db.categoriesDB = require("./Categories.model");
db.paymentMethodsDB = require("./PaymentMethods.model");
db.orderStatusDB = require("./OrderStatus.model");
db.orderDB = require("./Orders.model");
db.table_products_ordersDB = require("./Table_products_orders.model");

//************** Relaciones One-To-Many ; 1 categoria puede tener muchas productos. Ej: intel y razer ambos son categorias procesador.
db.categoriesDB.hasMany(db.productsDB, {
  as: "products",
  foreignKey: "id_category",
});
db.productsDB.belongsTo(db.categoriesDB, {
  as: "category",
  foreignKey: "id_category",
});

//
//************** Relaciones One-To-Many ; 1 PM puede tener muchas Ordenes
db.paymentMethodsDB.hasMany(db.orderDB, {
  as: "orders",
  foreignKey: "id_payment_method",
});
db.orderDB.belongsTo(db.paymentMethodsDB, {
  as: "paymentMethods",
  foreignKey: "id_payment_method",
});

//**************Relacion un Usuario puede tener mucchos pedidos. Un pedido puede tener un solo usuairo
db.usersDB.hasMany(db.orderDB, {
  as: "orders",
  foreignKey: "id_user",
});
db.orderDB.belongsTo(db.usersDB, {
  as: "users",
  foreignKey: "id_user",
});
// Funciona
db.orderDB.belongsTo(db.orderStatusDB, {
  as: "orderStatus",
  foreignKey: "id_order_status",
});

db.orderStatusDB.hasMany(db.orderDB, {
  as: "orders",
  foreignKey: "id_order_status",
});

db.orderDB.belongsToMany(db.productsDB, {
  as: "products2",
  through: { model: db.table_products_ordersDB, unique: false },
  foreignKey: "id_order",
});
db.productsDB.belongsToMany(db.orderDB, {
  as: "orders2",
  through: { model: db.table_products_ordersDB, unique: false },
  foreignKey: "id_product",
});

module.exports = db;
