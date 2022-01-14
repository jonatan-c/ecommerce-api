const { Router } = require("express");
const {
  getAllPaymentMethods,
} = require("../controllers/paymentMethods.controller");
const { hasToken, isTokenAdmin } = require("../middlewares/auth.middlewares");
const {
  hasPaymentMethodsInDB,
} = require("../middlewares/paymentMethods.middlewares");
const router = Router();

router.get(
  "/",
  hasToken,
  isTokenAdmin,
  hasPaymentMethodsInDB,
  getAllPaymentMethods
);
router.post("/");
router.get("/:id");
router.put("/:id");
router.delete("/:id");

module.exports = router;

/**
 * @swagger
 * /paymentMethods:
 *  get:
 *    tags:
 *      - Admin PaymentMethods
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
 * /paymentMethods/{id}:
 *  get:
 *    tags:
 *      - Admin PaymentMethods
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
 * /paymentMethods:
 *  post:
 *    tags:
 *      - Admin PaymentMethods
 *    summary: Add a new product
 *    description: Add a new product
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : true
 *      dataType : string
 *      in : header
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
 * /paymentMethods/{id}:
 *  put:
 *    tags:
 *      - Admin PaymentMethods
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
 * /paymentMethods/{id}:
 *  delete:
 *    tags:
 *      - Admin PaymentMethods
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
