var express = require("express");
var clienteController = require("../controller/ClienteController");
var router = express.Router();

router.get("/", clienteController.getAll);
router.get("/:_id", clienteController.getById);
router.post("/", clienteController.add);
router.put("/:_id", clienteController.update);
router.delete("/:_id", clienteController.delete);

module.exports = router;