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

async function isNamePaymentMethodsInDB(req, res, next) {
  const paymentMethods = await PaymentMethodsDB.findOne({
    where: {
      name_paymentMethod: req.body.name_paymentMethod,
    },
  });
  if (paymentMethods) {
    return res.status(200).json({
      message: "El metodo de pago ya existe",
    });
  }
  next();
}

module.exports = { hasPaymentMethodsInDB, isNamePaymentMethodsInDB };
