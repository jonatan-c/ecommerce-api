const PaymentMethodsDB = require("../models/PaymentMethods.model");

async function hasPaymentMethodsInDB(req, res, next) {
  const products = await PaymentMethodsDB.findAll();
  if (products.length === 0) {
    return res.status(200).json({
      message: "No hay metodos de pago en la base de datos",
    });
  }
  next();
}

module.exports = { hasPaymentMethodsInDB };
