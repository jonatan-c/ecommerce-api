const { Router } = require("express");
const { getAllProducts } = require("../controllers/productsAdmin.controller");

const router = Router();

router.get("/", getAllProducts);

module.exports = router;

/**
 * @swagger
 * /productsGuest:
 *  get:
 *    tags:
 *      - Guest Products
 *    summary: Guest can see all products in the store
 *    description: Guest can see all products in the store
 *    responses:
 *      200:
 *        description: Success
 */
