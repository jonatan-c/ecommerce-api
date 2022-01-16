const { Router } = require("express");
const {
  getAllOrderByIdUser,
  createOrder,
} = require("../controllers/orderUser.controller");
const {
  hasToken,
  isTokenUser,
  isUserAnyoneOnline,
} = require("../middlewares/auth.middlewares");
const router = Router();

router.get("/", hasToken, isTokenUser, isUserAnyoneOnline, getAllOrderByIdUser);
// el usuario deberia poder hacer las get post put delete, pero primero debe tener todas las asociaciones
router.post("/", hasToken, isTokenUser, isUserAnyoneOnline, createOrder);
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
 *      description: id of the product
 *      in: path
 *      required: true
 *      type: integer
 *    - name: name_product
 *      description: name of the product
 *      in: formData
 *      required: true
 *      type: string
 *    - name : price_product
 *      description: price of the product
 *      in: formData
 *      required: true
 *      type: integer
 *    - name : description_product
 *      description:  description of the product
 *      in: formData
 *      required: true
 *      type: string
 *    - name : stock_product
 *      description: stock of the product
 *      in: formData
 *      required: true
 *      type: integer
 *    - name : id_category
 *      description: category of the product
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
