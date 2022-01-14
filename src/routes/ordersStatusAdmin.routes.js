const { Router } = require("express");
const router = Router();

const { hasToken, isTokenAdmin } = require("../middlewares/auth.middlewares");

const { getOrdersStatus } = require("../controllers/ordersStatus.controller");
const {
  existOrdersStatusInDB,
} = require("../middlewares/ordersStatusAdmin.middlewares");

router.get("/", hasToken, isTokenAdmin, existOrdersStatusInDB, getOrdersStatus);
router.get("/:id");
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
