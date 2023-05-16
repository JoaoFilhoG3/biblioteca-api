"use strict";

var express = require("express");
var router = express.Router();

router.get("/", function (request, response) {
    response.json({
        "nome": "joão filho",
        "email": "joao@joao.com"
    });
});

//Clientes
router.use("/clientes", require("./clientes.js"));
//Livros
router.use("/livros", require("./livros.js"));
//Categorias
router.use("/categorias", require("./categorias.js"));
//Funcionarios
router.use("/funcionarios", require("./funcionarios.js"));
//Emprestimos
router.use("/emprestimos", require("./emprestimos.js"));
//Itens Emprestimo
router.use("/itens_emprestimo", require("./itens_emprestimos.js"));

module.exports = router;