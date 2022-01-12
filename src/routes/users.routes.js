const { Router } = require("express");
const router = Router();

const {
  createUser,
  getAllUsers,
  getUserById,
  updateRole,
} = require("../controllers/users.controller");
const { isEmailValid } = require("../middlewares/users.middlewares");
// const { isUserInDB } = require("../controllers/auth.controller");
const {
  hasToken,
  isTokenSuperAdmin,
  isUserInDB,
} = require("../middlewares/auth.middlewares");

// registro comun para todos los usuarios
router.post("/register", isEmailValid, createUser);

//solo el SuperAdmin puede acceder a estas 2 rutas
router.get("/", hasToken, isTokenSuperAdmin, getAllUsers);
router.get("/:id", hasToken, isUserInDB, isTokenSuperAdmin, getUserById);
router.put("/:id", hasToken, isUserInDB, isTokenSuperAdmin, updateRole);

module.exports = router;

/**
 * @swagger
 * /users/register:
 *  post:
 *    tags:
 *      - Register
 *    summary: You can register a new user
 *    description: You can register a new user
 *    parameters:
 *    - name: name
 *      description: Name of the user
 *      in: formData
 *      required: true
 *      type: string
 *    - name: password1
 *      description: password of the user
 *      in: formData
 *      required: true
 *      type: string
 *    - name: email
 *      description: email of the user
 *      in: formData
 *      required: true
 *      type: string
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                name:
 *                  type: string
 *      400:
 *        description: The specified user ID is invalid (e.g. not a number)
 *      404:
 *        description: A user with the specified ID was not found
 *
 */

/**
 * @swagger
 * /users:
 *  get:
 *    tags:
 *      - Super Admin put Role to user by id user (id_user)
 *    summary: The SuperAdmin can see every users in the database.
 *    description: SuperAdmin can see every users in the database.
 *    parameters:
 *    - name : x-auth-token
 *      value :
 *      required : false
 *      dataType : string
 *      in : header
 *    responses:
 *      200:
 *        description: Success
 *
 */

/**
 * @swagger
 * /users/{id}:
 *  get:
 *    tags:
 *      - Super Admin put Role to user by id user (id_user)
 *    summary: The SuperAdmin can see every users in the database.
 *    description: SuperAdmin can see every users in the database.
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
 *
 */

/**
 * @swagger
 * /users/{id}:
 *  put:
 *    tags:
 *      - Super Admin put Role to user by id user (id_user)
 *    summary: Edit a user role (SuperAdmin only)
 *    description: Edit a user role (SuperAdmin only)
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
 *    - name: role
 *      description: name of the product
 *      in: formData
 *      required: true
 *      type: string
 *    responses:
 *      200:
 *        description: Success
 */
