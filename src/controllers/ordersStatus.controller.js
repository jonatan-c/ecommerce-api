const OrdersStatusDB = require("../models/OrderStatus.model");

async function getOrdersStatus(req, res) {
  try {
    const ordersStatus = await OrdersStatusDB.findAll();
    res.status(200).json(ordersStatus);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los estados de pedidos",
      error,
    });
  }
}

module.exports = { getOrdersStatus };
