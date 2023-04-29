var express = require("express");
var funcionarioController = require("../controller/FuncionarioController");
var router = express.Router();

router.get("/", funcionarioController.getAll);
router.get("/:_id", funcionarioController.getById);
router.post("/", funcionarioController.add);
router.put("/:_id", funcionarioController.update);
router.delete("/:_id", funcionarioController.delete);

module.exports = router;