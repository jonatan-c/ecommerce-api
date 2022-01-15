const { Router } = require("express");
const { getAllAddressUser } = require("../controllers/addressUser.controller");
const {
  existNameAddressInDB,
} = require("../middlewares/addressUser.middlewares");
const {
  hasToken,
  isTokenUser,
  isUserAnyoneOnline,
} = require("../middlewares/auth.middlewares");
const router = Router();

router.get(
  "/",
  hasToken,
  isTokenUser,
  isUserAnyoneOnline,
  existNameAddressInDB
);
router.get("/:id");
router.post("/");
router.put("/:id");
router.delete("/:id");

module.exports = router;

/**
 * @swagger
 * /usersAddress:
 *  get:
 *    tags:
 *      - User address
 *    summary: list of addresses in the store for USER BY ID IN TOKEN
 *    description: list of addresses in the store for USER BY ID IN TOKEN
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
