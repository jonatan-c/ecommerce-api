const { Router } = require("express");
const router = Router();

// middleware
const { hasToken, isTokenAdmin } = require("../middlewares/auth.middlewares");
const {
  existCategoriesInDB,
  isNameCategoryInDB,
  isCategoryIdInDB,
} = require("../middlewares/categoriesAdmin.middlewares");
// controller
const {
  getCategories,
  createCategory,
  getCategory,
} = require("../controllers/categoriesAdmin.controller");

router.get("/", hasToken, isTokenAdmin, existCategoriesInDB, getCategories);
router.post("/", hasToken, isTokenAdmin, isNameCategoryInDB, createCategory);
router.get("/:id", hasToken, isTokenAdmin, isCategoryIdInDB, getCategory);
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

/**
 * @swagger
 * /categoriesAdmin/{id}:
 *  get:
 *    tags:
 *      - Admin categories
 *    summary: Get a category by id
 *    description: Get a category by id
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : true
 *      dataType : string
 *      in : header
 *    - name: id
 *      description: id of  the category
 *      in: path
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /categoriesAdmin:
 *  post:
 *    tags:
 *      - Admin categories
 *    summary: Add a new category
 *    description: Add a new category
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : true
 *      dataType : string
 *      in : header
 *    - name: name_category
 *      description: name of the category
 *      in: formData
 *      required: true
 *      type: string
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /productsAdmin/{id}:
 *  put:
 *    tags:
 *      - Admin Products
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
 *    - name : category_product
 *      description: category of the product
 *      in: formData
 *      required: true
 *      type: string
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /productsAdmin/{id}:
 *  delete:
 *    tags:
 *      - Admin Products
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
