const OrderDB = require("../models/Orders.model");

async function getAllOrderByIdUser(req, res) {
  try {
    const order = await OrderDB.findAll({
      where: {
        id_user: req.decoded.id_user,
      },
    });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los pedidos",
      error,
    });
  }
}

module.exports = {
  getAllOrderByIdUser,
};
