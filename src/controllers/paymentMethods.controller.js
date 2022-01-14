const PaymentMethodsDB = require("../models/PaymentMethods.model");

async function getAllPaymentMethods(req, res) {
  try {
    const paymentMethods = await PaymentMethodsDB.findAll();
    res.status(200).json(paymentMethods);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los metodos de pago",
      error,
    });
  }
}

module.exports = { getAllPaymentMethods };
