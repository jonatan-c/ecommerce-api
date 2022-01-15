const { Router } = require("express");
const { getAllProducts } = require("../controllers/productsAdmin.controller");
const {
  hasToken,
  isTokenUser,
  isUserAnyoneOnline,
} = require("../middlewares/auth.middlewares");
const router = Router();

router.get("/", hasToken, isTokenUser, isUserAnyoneOnline, getAllProducts);

module.exports = router;

/**
 * @swagger
 * /productsUser:
 *  get:
 *    tags:
 *      - User Products
 *    summary: list of products in the store for all users ONLY USERS
 *    description: list of products in the store for all users ONLY USERS
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
