const { Router } = require("express");
const router = Router();

const {
  autenticateUser,
  getUserAutenticated,
} = require("../controllers/auth.controller");

const { hasToken } = require("../middlewares/auth.middlewares");

// login
router.post("/", autenticateUser);
// obtiene que usuario esta autenticado
router.get("/", hasToken, getUserAutenticated);

module.exports = router;

/**
 * @swagger
 * /auth:
 *  post:
 *    tags:
 *      - Login - Auth
 *    summary: You can login a user
 *    description: You can login a user
 *    parameters:
 *    - name: email
 *      description:  Email of the user
 *      in: formData
 *      required: true
 *      type: string
 *    - name: password1
 *      description: password of the user
 *      in: formData
 *      required: true
 *      type: string
 *    responses:
 *      200:
 *        description: Success
 */

/**
 * @swagger
 * /auth:
 *  get:
 *    tags:
 *      - Login - Auth
 *    summary: The Admin can see every payment methods in the database.
 *    description: Admin can see every
 *    parameters:
 *    - name : x-auth-token
 *      value : Authorization token
 *      required : true
 *      dataType : string
 *      in : header
 *    responses:
 *      200:
 *        description: Success
 */
