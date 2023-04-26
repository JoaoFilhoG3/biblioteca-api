"use strict";

var express = require("express");
var router = express.Router();

var clientes = [
    {
        "id": 1,
        "nome": "João Filho",
        "idade": 25,
        "email": "joao@joao.com"
    },
    {
        "id": 2,
        "nome": "Maria",
        "idade": 21,
        "email": "maria@maria.com"
    },
    {
        "id": 3,
        "nome": "Chico",
        "idade": 30,
        "email": "chico@chico.com"
    },
];

router.get("/", function (request, response) {
    response.json(clientes);
});

router.get("/:_id", function (request, response) {
    var id = request.params._id;
    var cliente = clientes.filter(
        (percorrer) => percorrer.id == id
    );
    cliente = cliente[0];
    if (cliente) {
        response.json(cliente);
    } else {
        response.json({ "erro": "cliente não encontrado" });
    }
});

router.post("/", function (request, response) {
    var nome = request.body.nome;
    var idade = request.body.idade;
    var email = request.body.email;

    var maiorID = 0;

    clientes.forEach((percorrer) => {
        if (percorrer.id > maiorID) {
            maiorID = percorrer.id;
        }
    });

    clientes.push({
        "id": maiorID + 1,
        "nome": nome,
        "idade": idade,
        "email": email
    });

    response.json({"mensagem":"cliente inserido com sucesso"});
});

router.put("/:_id", function (request, response) {
    var id = request.params._id;

    var nome = request.body.nome;
    var idade = request.body.idade;
    var email = request.body.email;

    var cliente = clientes.filter(
        (percorrer) => percorrer.id == id
    )[0];

    if(nome){
        cliente.nome = nome;
    }

    if(idade){
        cliente.idade = idade;
    }

    if(email){
        cliente.email = email;
    }

    response.json({"mensagem":"cliente alterado com sucesso"});
});


router.delete("/:_id", function (request, response) {
    var id = request.params._id;

    var arrayIndex = clientes.findIndex((percorrer)=> percorrer.id == id);
    clientes.splice(arrayIndex, 1);
    response.json({"mensagem":"Cpf cancelado com sucesso"});
});

module.exports = router;