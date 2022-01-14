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

async function isIdOrderStatusInDB(req, res, next) {
  const { id } = req.params;
  const ordersStatus = await OrdersStatusDB.findByPk(id);
  if (!ordersStatus) {
    return res.status(404).json({
      message: "No existe el estado de pedido en la base de datos",
    });
  }
  next();
}

async function existNameOrderStatusInDB(req, res, next) {
  const { name } = req.body;
  const ordersStatus = await OrdersStatusDB.findOne({
    where: { name },
  });
  if (ordersStatus) {
    return res.status(200).json({
      message: "El estado de pedido ya existe en la base de datos",
    });
  }
  next();
}

module.exports = {
  existOrdersStatusInDB,
  isIdOrderStatusInDB,
  existNameOrderStatusInDB,
};
