const OrdersStatusDB = require("../models/OrderStatus.model");

async function existOrdersStatusInDB(req, res, next) {
  const ordersStatus = await OrdersStatusDB.findAll();
  if (ordersStatus.length == 0) {
    return res.status(404).json({
      message: "No existen estados de pedidos en la base de datos",
    });
  }
  next();
}

module.exports = { existOrdersStatusInDB };
