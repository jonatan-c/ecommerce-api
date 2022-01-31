const { promisify } = require("bluebird");
const OrderDB = require("../models/Orders.model");
const table_products_ordersDB = require("../models/Table_products_orders.model");
const ProductsDB = require("../models/Products.model");
const PaymentMethodsDB = require("../models/PaymentMethods.model");
const orderStatusDB = require("../models/OrderStatus.model");

const fs = require("fs");
const path = require("path");

async function getAllOrderByIdUser(req, res) {
  try {
    const orders = await OrderDB.findAll({
      include: ["paymentMethods", "orderStatus", "products2"],
      where: {
        id_user: req.decoded.id_user,
      },
    });
    const ordersFinal = orders.map((order) => {
      return {
        id_order: order.id_order,
        number_address: order.number_address,
        paymentMethods: order.paymentMethods,
        orderStatus: order.orderStatus,
        productsTotals: order.products2.map((element) => {
          return {
            id_product: element.id_product,
            name_product: element.name_product,
            price_product: element.price_product,
          };
        }),
      };
    });
    res.status(200).json({
      message: "Orders",
      ordersFinal,
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
    const orders = await OrderDB.findAll({
      include: ["paymentMethods", "orderStatus", "products2"],
      where: {
        id_user: req.decoded.id_user,
        id_order: req.params.id,
      },
    });

    const ordersFinal = orders.map((order) => {
      return {
        id_order: order.id_order,
        id_payment_method: order.id_payment_method,
        id_order_status: order.id_order_status,
        address: order.address,
        number_address: order.number_address,
        paymentMethods: order.paymentMethods,
        orderStatus: order.orderStatus,
        productsTotals: order.products2.map((element) => {
          return {
            id_product: element.id_product,
            name_product: element.name_product,
            price_product: element.price_product,
          };
        }),
      };
    });

    res.status(200).json({
      message: "Orders",
      ordersFinal,
    });
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
    const priceProduct = await ProductsDB.findOne({
      where: {
        id_product: req.body.id_product,
      },
    });

    const product = await table_products_ordersDB.create({
      id_order: req.body.id_order,
      id_product: req.body.id_product,
      quantity_product: req.body.quantity_product,
      price_total: priceProduct.price_product * req.body.quantity_product,
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
        quantity_product: req.body.quantity_product,
      },
      {
        where: {
          id_order: req.params.idOrder,
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

async function deleteAssociatedByIdUSer(req, res) {
  try {
    const order = await table_products_ordersDB.destroy({
      where: {
        id_order: req.params.idOrder,
        id_product: req.params.idProduct,
      },
    });
    res.status(200).json({ message: "Associate Product Order deleted" });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el pedido",
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
  deleteAssociatedByIdUSer,
};
