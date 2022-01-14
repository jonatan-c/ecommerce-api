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

async function getOrderStatus(req, res) {
  try {
    const { id } = req.params;
    const orderStatus = await OrdersStatusDB.findByPk(id);
    res.status(200).json(orderStatus);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el estado de pedido",
      error,
    });
  }
}

module.exports = { getOrdersStatus, getOrderStatus };
