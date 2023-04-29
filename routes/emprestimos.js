var express = require("express");
var emprestimoController = require("../controller/EmprestimoController");
var router = express.Router();

router.get("/", emprestimoController.getAll);
router.get("/:_id", emprestimoController.getById);
router.post("/", emprestimoController.add);
router.put("/:_id", emprestimoController.update);
router.delete("/:_id", emprestimoController.delete);

module.exports = router;