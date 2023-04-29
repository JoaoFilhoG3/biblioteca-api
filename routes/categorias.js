var express = require("express");
var categoriaController = require("../controller/CategoriaController");
var router = express.Router();

router.get("/", categoriaController.getAll);
router.get("/:_id", categoriaController.getById);
router.post("/", categoriaController.add);
router.put("/:_id", categoriaController.update);
router.delete("/:_id", categoriaController.delete);

module.exports = router;