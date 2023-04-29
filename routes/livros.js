var express = require("express");
var livroController = require("../controller/LivroController");
var router = express.Router();

router.get("/", livroController.getAll);
router.get("/:_id", livroController.getById);
router.post("/", livroController.add);
router.put("/:_id", livroController.update);
router.delete("/:_id", livroController.delete);

module.exports = router;