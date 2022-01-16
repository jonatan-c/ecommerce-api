const PaymentMethodsDB = require("../models/PaymentMethods.model");

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

module.exports = { isIdPaymentMethodInDB };
