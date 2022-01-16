const OrderDB = require("../models/Orders.model");

async function getAllOrderByIdUser(req, res) {
  try {
    const order = await OrderDB.findAll({
      where: {
        id_user: req.decoded.id_user,
      },
      include: ["paymentMethods", "orderStatus"],
    });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los pedidos",
      error,
    });
  }
}

async function getOrderByIdUser(req, res) {
  try {
    const order = await OrderDB.findOne({
      where: {
        id_user: req.decoded.id_user,
        id_order: req.params.id,
      },
      include: ["paymentMethods", "orderStatus"],
    });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el pedido",
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
      address: req.body.address,
      number_address: req.body.number_address,
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el pedido",
      error,
    });
  }
}

async function editOrderByIdUser(req, res) {
  try {
    const order = await OrderDB.update(
      {
        id_payment_method: req.body.id_payment_method,
        id_order_status: req.body.id_order_status,
        address: req.body.address,
        number_address: req.body.number_address,
      },
      {
        where: {
          id_user: req.decoded.id_user,
          id_order: req.params.id,
        },
      }
    );
    res.status(200).json({ message: "Order updated" });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el pedido",
      error,
    });
  }
}

async function deleteOrderByIdUser(req, res) {
  try {
    const order = await OrderDB.destroy({
      where: {
        id_user: req.decoded.id_user,
        id_order: req.params.id,
      },
    });
    res.status(200).json({ message: "Order deleted" });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el pedido",
      error,
    });
  }
}

module.exports = {
  getAllOrderByIdUser,
  createOrder,
  editOrderByIdUser,
  deleteOrderByIdUser,
  getOrderByIdUser,
};
