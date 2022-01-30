const PaymentMethodsDB = require("../models/PaymentMethods.model");
const OrderStatusDB = require("../models/OrderStatus.model");
const OrderDB = require("../models/Orders.model");

async function isIdPaymentMethodInDB(req, res, next) {
  const { id_payment_method } = req.body;
  const paymentMethod = await PaymentMethodsDB.findOne({
    where: {
      id_payment_method,
    },
  });
  if (!paymentMethod) {
    return res.status(400).json({
      message: "El metodo de pago no existe",
    });
  }
  next();
}

async function isIdOrderStatusInDB(req, res, next) {
  const { id_order_status } = req.body;
  const orderStatus = await OrderStatusDB.findOne({
    where: {
      id_order_status,
    },
  });
  if (!orderStatus) {
    return res.status(400).json({
      message: "El estado del pedido no existe",
    });
  }
  next();
}
async function isIdOrderInDB(req, res, next) {
  const { id } = req.params;
  const order = await OrderDB.findOne({
    where: {
      id_user: req.decoded.id_user,
      id_order: id,
    },
  });
  if (!order) {
    return res.status(400).json({
      message: "El pedido no existe",
    });
  }
  next();
}

async function isOrderPending(req, res, next) {
  try {
    const orderStatus = await OrderDB.findOne({
      where: {
        id_order_status: parseInt(1),
        id_user: req.decoded.id_user,
        id_order: req.params.id,
      },
    });
    if (!orderStatus) {
      return res.status(400).json({
        message: "El pedido no está pendiente, no puedes hacer cambios",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: "Error Server",
      error,
    });
  }
}

module.exports = {
  isIdPaymentMethodInDB,
  isIdOrderStatusInDB,
  isIdOrderInDB,
  isOrderPending,
};
