const { Router } = require("express");
const {
  getAllProducts,
  getProductById,
} = require("../controllers/productsAdmin.controller");
const {
  hasToken,
  isTokenUser,
  isUserAnyoneOnline,
} = require("../middlewares/auth.middlewares");
const router = Router();

router.get("/", hasToken, isTokenUser, isUserAnyoneOnline, getAllProducts);

router.get("/id", hasToken, isTokenUser, isUserAnyoneOnline, getProductById);

module.exports = router;

/**
 * @swagger
 * /productsUser:
 *  get:
 *    tags:
 *      - User Products
 *    summary: Get all products
 *    description: Get all products
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : true
 *      dataType : string
 *      in : header
 *    - in: query
 *      name: pageNumber
 *      description: name of the character
 *      required: false
 *      schema:
 *        type: integer
 *    - in: query
 *      name: pageSize
 *      description: age of the character
 *      required: false
 *      schema:
 *        type: integer
 *    - in: query
 *      name: category
 *      description: id of the movies
 *      required: false
 *      schema:
 *        type: string
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /productsUser/{id}:
 *  get:
 *    tags:
 *      - User Products
 *    summary: Get a product by id
 *    description: Get a product by id
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
