const { Router } = require("express");
const router = Router();

const { hasToken, isTokenAdmin } = require("../middlewares/auth.middlewares");

const {
  getOrdersStatus,
  getOrderStatus,
} = require("../controllers/ordersStatus.controller");
const {
  existOrdersStatusInDB,
  isIdOrderStatusInDB,
} = require("../middlewares/ordersStatusAdmin.middlewares");

router.get("/", hasToken, isTokenAdmin, existOrdersStatusInDB, getOrdersStatus);
router.get(
  "/:id",
  hasToken,
  isTokenAdmin,
  existOrdersStatusInDB,
  isIdOrderStatusInDB,
  getOrderStatus
);
router.post("/");
router.put("/:id");
router.delete("/:id");

module.exports = router;

/**
 * @swagger
 * /ordersStatusAdmin:
 *  get:
 *    tags:
 *      - Admin Orders Status
 *    summary: list of orders status in the store for all users
 *    description: list of orders status in the store for all users
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
 * /ordersStatusAdmin/{id}:
 *  get:
 *    tags:
 *      - Admin Orders Status
 *    summary: Get a order status by id
 *    description: Get a order status by id
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : true
 *      dataType : string
 *      in : header
 *    - name: id
 *      description: id of the order status
 *      in: path
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 */
