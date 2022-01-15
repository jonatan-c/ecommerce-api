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

async function getPaymentMethodById(req, res) {
  try {
    const { id } = req.params;
    const paymentMethod = await PaymentMethodsDB.findOne({
      where: {
        id_payment_method: id,
      },
    });
    res.status(200).json(paymentMethod);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el metodo de pago",
      error,
    });
  }
}

async function editPaymentMethod(req, res) {
  try {
    const { id } = req.params;
    const { name_paymentMethod } = req.body;
    const paymentMethod = await PaymentMethodsDB.update(
      {
        name_paymentMethod,
      },
      {
        where: {
          id_payment_method: id,
        },
      }
    );
    res.status(200).json({ message: "Metodo de pago actualizado" });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el metodo de pago",
      error,
    });
  }
}

async function deletePaymentMethod(req, res) {
  try {
    const { id } = req.params;
    const paymentMethod = await PaymentMethodsDB.destroy({
      where: {
        id_payment_method: id,
      },
    });
    res.status(200).json({ message: "Metodo de pago eliminado" });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el metodo de pago",
      error,
    });
  }
}

module.exports = {
  getAllPaymentMethods,
  createPaymentMethod,
  getPaymentMethodById,
  editPaymentMethod,
  deletePaymentMethod,
};
