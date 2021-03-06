const { Router } = require("express");
const {
  getAllPaymentMethods,
  createPaymentMethod,
  getPaymentMethodById,
  editPaymentMethod,
  deletePaymentMethod,
} = require("../controllers/paymentMethods.controller");
const {
  hasToken,
  isTokenAdmin,
  isUserAnyoneOnline,
} = require("../middlewares/auth.middlewares");
const {
  hasPaymentMethodsInDB,
  isNamePaymentMethodsInDB,
  isIdPaymentMethodInDB,
} = require("../middlewares/paymentMethods.middlewares");
const router = Router();

router.get(
  "/",
  hasToken,
  isTokenAdmin,
  isUserAnyoneOnline,
  hasPaymentMethodsInDB,
  getAllPaymentMethods
);
router.post(
  "/",
  hasToken,
  isTokenAdmin,
  isUserAnyoneOnline,
  isNamePaymentMethodsInDB,
  createPaymentMethod
);
router.get(
  "/:id",
  hasToken,
  isTokenAdmin,
  isUserAnyoneOnline,
  isIdPaymentMethodInDB,
  getPaymentMethodById
);
router.put(
  "/:id",
  hasToken,
  isTokenAdmin,
  isUserAnyoneOnline,
  isIdPaymentMethodInDB,
  editPaymentMethod
);
router.delete(
  "/:id",
  hasToken,
  isTokenAdmin,
  isUserAnyoneOnline,
  isIdPaymentMethodInDB,
  deletePaymentMethod
);

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
 *    summary: Get a payment method by id
 *    description: Get a payment method by id
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : true
 *      dataType : string
 *      in : header
 *    - name: id
 *      description: id of the payment method
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
 *    - name: name_paymentMethod
 *      description: name of the product
 *      in: formData
 *      required: true
 *      type: string
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
 *    summary: Update a payment method by id
 *    description: Update a payment method by id
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : true
 *      dataType : string
 *      in : header
 *    - name: id
 *      description: id of the payment method
 *      in: path
 *      required: true
 *      type: integer
 *    - name: name_paymentMethod
 *      description: name of the payment method
 *      in: formData
 *      required: true
 *      type: string
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
 *    summary: Delete a payment method by id
 *    description:  Delete a payment method by id
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : true
 *      dataType : string
 *      in : header
 *    - name: id
 *      description: id of the payment method
 *      in: path
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 */
