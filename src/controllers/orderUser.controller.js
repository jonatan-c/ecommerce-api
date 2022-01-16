const OrderDB = require("../models/Orders.model");

async function getAllOrderByIdUser(req, res) {
  try {
    const order = await OrderDB.findAll({
      where: {
        id_user: req.decoded.id_user,
      },
    });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los pedidos",
      error,
    });
  }
}

async function createOrder(req, res) {
  try {
    const order = await OrderDB.create({
      id_payment_method: req.body.id_payment_method,
      id_user: req.decoded.id_user,
      id_order_status: 1,
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el pedido",
      error,
    });
  }
}

module.exports = {
  getAllOrderByIdUser,
  createOrder,
};
