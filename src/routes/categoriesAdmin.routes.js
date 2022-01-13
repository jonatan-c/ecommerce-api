const { Router } = require("express");
const router = Router();

// middleware
const { hasToken, isTokenAdmin } = require("../middlewares/auth.middlewares");
const {
  existCategoriesInDB,
} = require("../middlewares/categoriesAdmin.middlewares");
// controller
const { getCategories } = require("../controllers/categoriesAdmin.controller");

router.get("/", hasToken, isTokenAdmin, existCategoriesInDB, getCategories);
router.post("/", hasToken, isTokenAdmin);
router.get("/:id", hasToken, isTokenAdmin);
router.put("/:id", hasToken, isTokenAdmin);
router.delete("/:id", hasToken, isTokenAdmin);

module.exports = router;

/**
 * @swagger
 * /categoriesAdmin:
 *  get:
 *    tags:
 *      - Admin categories
 *    summary: list of categories in the store for all users
 *    description: list of categories in the store for all users
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
