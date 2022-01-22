const { Router } = require("express");
const router = Router();
// **** Images
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../images/products_images/input/"),
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage });
// ****

const {
  hasProductInDB,
  isProductInDB,
  isNameProductInDB,
  isCategoryIdDB,
} = require("../middlewares/productsAdmin.middlewares");

const {
  hasToken,
  isTokenAdmin,
  isUserAnyoneOnline,
} = require("../middlewares/auth.middlewares");

const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsAdmin.controller");

router.get(
  "/",
  hasToken,
  isTokenAdmin,
  isUserAnyoneOnline,
  hasProductInDB,
  getAllProducts
);
router.get(
  "/:id",
  hasToken,
  isTokenAdmin,
  isUserAnyoneOnline,
  isProductInDB,
  getProductById
);
router.post(
  "/",
  hasToken,
  isTokenAdmin,
  isUserAnyoneOnline,
  isNameProductInDB,
  upload.single("image_product"),
  isCategoryIdDB,
  createProduct
);
router.put(
  "/:id",
  hasToken,
  isTokenAdmin,
  isUserAnyoneOnline,
  isProductInDB,
  isCategoryIdDB,
  updateProduct
);
router.delete(
  "/:id",
  hasToken,
  isTokenAdmin,
  isUserAnyoneOnline,
  isProductInDB,
  deleteProduct
);

module.exports = router;

/**
 * @swagger
 * /productsAdmin:
 *  get:
 *    tags:
 *      - Admin Products
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
 * /productsAdmin/{id}:
 *  get:
 *    tags:
 *      - Admin Products
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
 * /productsAdmin:
 *  post:
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
 *    - name : image_product
 *      description: image of the products
 *      in: formData
 *      required: true
 *      type: file
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
