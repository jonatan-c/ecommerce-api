const { promisify } = require("bluebird");
const OrderDB = require("../models/Orders.model");
const table_products_ordersDB = require("../models/Table_products_orders.model");
const ProductsDB = require("../models/Products.model");
const PaymentMethodsDB = require("../models/PaymentMethods.model");
const orderStatusDB = require("../models/OrderStatus.model");

async function getAllOrderByIdUser(req, res) {
  try {
    const order = await OrderDB.findAll({
      where: {
        id_user: req.decoded.id_user,
      },
      include: ["paymentMethods", "orderStatus", "products2"],
    });
    res.status(200).json({
      message: "Orders",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los pedidos",
      error,
    });
  }
}

async function getOrderByIdUser(req, res) {
  try {
    const order = await OrderDB.findOne({
      where: {
        id_user: req.decoded.id_user,
        id_order: req.params.id,
      },
      include: [
        "paymentMethods",
        "orderStatus",
        "table_products_orders",
        "products2",
      ],
    });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el pedido",
      error,
    });
  }
}

async function createOrder(req, res) {
  try {
    const order = await OrderDB.create({
      id_payment_method: req.body.id_payment_method,
      id_user: req.decoded.id_user,
      id_order_status: req.body.id_order_status,
      address: req.body.address,
      number_address: req.body.number_address,
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el pedido",
      error,
    });
  }
}

// ASOCIACIONES
async function associateProductInOrder(req, res) {
  try {
    const product = await table_products_ordersDB.create({
      id_order: req.body.id_order,
      id_product: req.body.id_product,
      quantity_product: req.body.quantity_product,
      price_total: req.body.price_total,
    });

    res.status(201).json({ message: "Product associated" });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el pedido",
      error,
    });
  }
}
// ****************************** ESTE CODIGO FUNCIONA, EL PROBLEMA ES QUE NO PUEDE HACERLO FUNCIONAR CON SWAGGER, EN POSTMAN FUNCIONA BIEN.
// function createOrder(req, res) {
//   try {
//     new Promise(async (resolve, reject) => {
//       const order = await OrderDB.create({
//         id_payment_method: req.body.id_payment_method,
//         id_user: req.decoded.id_user,
//         id_order_status: req.body.id_order_status,
//         address: req.body.address,
//         number_address: req.body.number_address,
//       }).then(async (order) => {
//         for (let i = 0; i < req.body.products.length; i++) {
//           const product = await table_products_ordersDB.create({
//             id_order: order.id_order,
//             id_product: req.body.products[i].id_product,
//             quantity_product: req.body.products[i].quantity_product,
//           });
//         }
//         resolve(order);
//       });
//     });
//     res.status(201).json({ message: "Order created" });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error al crear el pedido",
//       error,
//     });
//   }
// }

async function editOrderByIdUser(req, res) {
  try {
    const order = await OrderDB.update(
      {
        id_payment_method: req.body.id_payment_method,
        id_order_status: req.body.id_order_status,
        address: req.body.address,
        number_address: req.body.number_address,
      },
      {
        where: {
          id_user: req.decoded.id_user,
          id_order: req.params.id,
        },
      }
    );
    res.status(200).json({ message: "Order updated" });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el pedido",
      error,
    });
  }
}

async function editAssociateByIdUser(req, res) {
  try {
    const order = await table_products_ordersDB.update(
      {
        // id_order: req.body.id_order,
        id_product: req.params.idOrder,
        quantity_product: req.body.quantity_product,
        // price_total: req.body.price_total,
      },
      {
        where: {
          id_user: req.decoded.id_user,
          id_product: req.params.idProduct,
        },
      }
    );
    res.status(200).json({ message: "Associate Order updated" });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el pedido",
      error,
    });
  }
}

async function deleteOrderByIdUser(req, res) {
  try {
    const order = await OrderDB.destroy({
      where: {
        id_user: req.decoded.id_user,
        id_order: req.params.id,
      },
    });
    res.status(200).json({ message: "Order deleted" });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el pedido",
      error,
    });
  }
}

module.exports = {
  getAllOrderByIdUser,
  createOrder,
  editOrderByIdUser,
  deleteOrderByIdUser,
  getOrderByIdUser,
  associateProductInOrder,
  editAssociateByIdUser,
};
