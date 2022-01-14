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

async function createOrderStatus(req, res) {
  try {
    const { name } = req.body;
    const orderStatus = await OrdersStatusDB.create({
      name,
    });
    res
      .status(201)
      .json({ message: "Order Status created successfully", orderStatus });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el estado de pedido",
      error,
    });
  }
}

async function editOrderStatus(req, res) {
  try {
    const orderStatus = await OrdersStatusDB.update(
      {
        name: req.body.name,
      },
      {
        where: {
          id_order_status: req.params.id,
        },
      }
    );
    res.status(200).json({
      message: "Order Status updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el estado de pedido",
      error,
    });
  }
}

module.exports = {
  getOrdersStatus,
  getOrderStatus,
  createOrderStatus,
  editOrderStatus,
};
