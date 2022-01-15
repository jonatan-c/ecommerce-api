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

async function createPaymentMethod(req, res) {
  try {
    const { name_paymentMethod } = req.body;
    const paymentMethod = await PaymentMethodsDB.create({
      name_paymentMethod,
    });
    res.status(201).json({ message: "Metodo de pago creado" });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el metodo de pago",
      error,
    });
  }
}

module.exports = { getAllPaymentMethods, createPaymentMethod };
