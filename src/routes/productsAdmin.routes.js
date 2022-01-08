const { Router } = require("express");
const router = Router();

const {
  hasProduct,
  isProductInDB,
} = require("../middlewares/productsAdmin.middlewares");

const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsAdmin.controller");

router.get("/", hasProduct, getAllProducts);
router.get("/:id", isProductInDB, getProductById);
router.post("/", createProduct);
router.put("/:id", isProductInDB, updateProduct);
router.delete("/:id", isProductInDB, deleteProduct);

module.exports = router;

/**
 * @swagger
 * /productsAdmin:
 *  get:
 *    tags:
 *      - Products
 *    summary: list of products in the store for all users
 *    description: list of products in the store for all users
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : false
 *      dataType : string
 *      in : header
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /productsAdmin/{id}:
 *  get:
 *    tags:
 *      - Products
 *    summary: Get a product by id
 *    description: Get a product by id
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : false
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
 * /productsAdmin:
 *  post:
 *    tags:
 *      - Products
 *    summary: Add a new product
 *    description: Add a new product
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : false
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
 *  put:
 *    tags:
 *      - Products
 *    summary: Add a new product
 *    description: Add a new product
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : false
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
 *      - Products
 *    summary: Delete a product by id
 *    description:  Delete a  product by id
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : false
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
