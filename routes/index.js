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

module.exports = router;