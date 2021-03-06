const { Router } = require("express");
const router = Router();

// middleware
const {
  hasToken,
  isTokenAdmin,
  isUserAnyoneOnline,
} = require("../middlewares/auth.middlewares");
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
  editCategory,
  deleteCategory,
} = require("../controllers/categoriesAdmin.controller");

router.get(
  "/",
  hasToken,
  isTokenAdmin,
  isUserAnyoneOnline,
  existCategoriesInDB,
  getCategories
);
router.post(
  "/",
  hasToken,
  isTokenAdmin,
  isUserAnyoneOnline,
  isNameCategoryInDB,
  createCategory
);
router.get(
  "/:id",
  hasToken,
  isTokenAdmin,
  isUserAnyoneOnline,
  isCategoryIdInDB,
  getCategory
);
router.put(
  "/:id",
  hasToken,
  isTokenAdmin,
  isUserAnyoneOnline,
  isCategoryIdInDB,
  editCategory
);
router.delete(
  "/:id",
  hasToken,
  isTokenAdmin,
  isUserAnyoneOnline,
  isCategoryIdInDB,
  deleteCategory
);

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
 * /categoriesAdmin/{id}:
 *  put:
 *    tags:
 *      - Admin categories
 *    summary: Edit a category
 *    description: Edit a category
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : true
 *      dataType : string
 *      in : header
 *    - name: id
 *      description: id of the category
 *      in: path
 *      required: true
 *      type: integer
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
 * /categoriesAdmin/{id}:
 *  delete:
 *    tags:
 *      - Admin categories
 *    summary: Delete a product by id
 *    description:  Delete a  product by id
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : true
 *      dataType : string
 *      in : header
 *    - name: id
 *      description: id of the category
 *      in: path
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 */
