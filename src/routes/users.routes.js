const { Router } = require("express");
const router = Router();

const { createUser } = require("../controllers/users.controller");
const { isEmailValid } = require("../middlewares/users.middlewares");

router.post("/register", isEmailValid, createUser);

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
