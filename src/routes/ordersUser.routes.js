const { Router } = require("express");
const {
  getAllOrderByIdUser,
  createOrder,
  editOrderByIdUser,
  deleteOrderByIdUser,
  getOrderByIdUser,
  associateProductInOrder,
  editAssociateByIdUser,
  deleteAssociatedByIdUSer,
} = require("../controllers/orderUser.controller");
const {
  hasToken,
  isTokenUser,
  isUserAnyoneOnline,
} = require("../middlewares/auth.middlewares");
const {
  isIdPaymentMethodInDB,
  isIdOrderStatusInDB,
  isIdOrderInDB,
  isOrderPending,
} = require("../middlewares/orderUser.middlewares");

const router = Router();

router.get("/", hasToken, isTokenUser, isUserAnyoneOnline, getAllOrderByIdUser);

router.get(
  "/:id",
  hasToken,
  isTokenUser,
  isUserAnyoneOnline,
  isIdOrderInDB,
  getOrderByIdUser
);
// revisar luego post de createOrder y associate, porque utilize el middleware de status o payment y esos verificaban el id pero del params , no del body
router.post(
  "/",
  hasToken,
  isTokenUser,
  isUserAnyoneOnline,
  isIdOrderStatusInDB,
  isIdPaymentMethodInDB,
  createOrder
);

router.post(
  "/addProducts",
  hasToken,
  isTokenUser,
  isUserAnyoneOnline,
  associateProductInOrder
);

router.put(
  "/:id",
  hasToken,
  isTokenUser,
  isUserAnyoneOnline,
  isIdPaymentMethodInDB,
  isIdOrderStatusInDB,
  isIdOrderInDB,
  isOrderPending,
  editOrderByIdUser
);

router.put(
  "/:idOrder/associated/:idProduct",
  hasToken,
  isTokenUser,
  isUserAnyoneOnline,

  editAssociateByIdUser
);

router.delete(
  "/:id",
  hasToken,
  isTokenUser,
  isUserAnyoneOnline,
  isIdOrderInDB,
  deleteOrderByIdUser
);

router.delete(
  "/:idOrder/associated/:idProduct",
  hasToken,
  isTokenUser,
  isUserAnyoneOnline,

  deleteAssociatedByIdUSer
);

module.exports = router;

/**
 * @swagger
 * /orderUser:
 *  get:
 *    tags:
 *      - User Order
 *    summary: list of products in the store for all users
 *    description: list of products in the store for all users
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : true
 *      dataType : string
 *      in : header
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /orderUser/{id}:
 *  get:
 *    tags:
 *      - User Order
 *    summary: Get a product by id
 *    description: Get a product by id
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : true
 *      dataType : string
 *      in : header
 *    - name: id
 *      description: id of the character
 *      in: path
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /orderUser:
 *  post:
 *    tags:
 *      - User Order
 *    summary: Add a new product
 *    description: Add a new product
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : true
 *      dataType : string
 *      in : header
 *    - name: id_payment_method
 *      description: name of the payment method
 *      in: formData
 *      required: true
 *      type: integer
 *    - name: address
 *      description: address
 *      in: formData
 *      required: true
 *      type: string
 *    - name: number_address
 *      description: number address
 *      in: formData
 *      required: true
 *      type: integer
 *    - name: id_order_status
 *      description: order status
 *      in: formData
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /orderUser/addProducts:
 *  post:
 *    tags:
 *      - User Order
 *    summary: associate a product in an order
 *    description: associate a product in an order
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : true
 *      dataType : string
 *      in : header
 *    - name: id_order
 *      description: id of the order
 *      in: formData
 *      required: true
 *      type: integer
 *    - name: id_product
 *      description: id of the product
 *      in: formData
 *      required: true
 *      type: integer
 *    - name: quantity_product
 *      description: quantity of the product
 *      in: formData
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /orderUser/{id}:
 *  put:
 *    tags:
 *      - User Order
 *    summary: Add a new product
 *    description: Add a new product
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : true
 *      dataType : string
 *      in : header
 *    - name: id
 *      description: id of the order
 *      in: path
 *      required: true
 *      type: integer
 *    - name: id_payment_method
 *      description: id of the payment method
 *      in: formData
 *      required: true
 *      type: integer
 *    - name : id_order_status
 *      description: id of the order status
 *      in: formData
 *      required: true
 *      type: integer
 *    - name : address
 *      description:  address
 *      in: formData
 *      required: true
 *      type: string
 *    - name : number_address
 *      description: number address
 *      in: formData
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /orderUser/{idOrder}/associated/{idProduct}:
 *  put:
 *    tags:
 *      - User Order
 *    summary: Add a new product
 *    description: Add a new product
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : true
 *      dataType : string
 *      in : header
 *    - name: idOrder
 *      description: id of the order
 *      in: path
 *      required: true
 *      type: integer
 *    - name: idProduct
 *      description: id of the payment method
 *      in: path
 *      required: true
 *      type: integer
 *    - name : quantity_product
 *      description: id of the order status
 *      in: formData
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /orderUser/{id}:
 *  delete:
 *    tags:
 *      - User Order
 *    summary: Delete a product by id
 *    description:  Delete a  product by id
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : true
 *      dataType : string
 *      in : header
 *    - name: id
 *      description: id of the product
 *      in: path
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /orderUser/{idOrder}/associated/{idProduct}:
 *  delete:
 *    tags:
 *      - User Order
 *    summary: Delete a product of an order by id
 *    description:  Delete a product of an order by id
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : true
 *      dataType : string
 *      in : header
 *    - name: idOrder
 *      description: id of the order
 *      in: path
 *      required: true
 *      type: integer
 *    - name: idProduct
 *      description: id of the product
 *      in: path
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 */
