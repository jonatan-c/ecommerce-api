const { Router } = require("express");
const router = Router();

router.get("/");
router.post("/");
router.get("/:id");
router.put("/:id");
router.delete("/:id");

module.exports = router;
