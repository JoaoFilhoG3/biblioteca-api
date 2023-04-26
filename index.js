"use strict";
//Importações
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

//Configurando servidor
var app = express();

app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//Carregando o gerenciador de rotas
app.use("/",require("./routes"));

app.use(function (request, response, next) {
    var err = new Error("Página não encontrada");
    err.status = 404;
    next(err);
});

app.use(function (err, request, response, next) {
    console.log(err.stack);
    response.status(err.status || 500)
        .json({ err: err.message });
});

var server = app.listen(3000, function () {
    console.log("Rodando servidor!!!");
});