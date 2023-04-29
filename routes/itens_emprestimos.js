var express = require("express");
var itemEmprestimoController = require("../controller/ItemEmpresticoController");
var router = express.Router();

router.get("/:_idEmprestimo", itemEmprestimoController.getAll);
router.get("/:_idEmprestimo/:_idItem", itemEmprestimoController.getById);
router.post("/:_idEmprestimo", itemEmprestimoController.add);
router.put("/:_idEmprestimo/:_idItem", itemEmprestimoController.update);
router.delete("/:_idEmprestimo/:_idItem", itemEmprestimoController.delete);

module.exports = router;