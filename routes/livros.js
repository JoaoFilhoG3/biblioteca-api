"use strict";

var express = require("express");
var router = express.Router();

router.get("/", function (request, response) {
    response.send("Obtendo todos os livros!");
});

router.post("/", function (request, response) {

}); 

router.put("/", function (request, response) {

});

router.delete("/", function (request, response) {

});

module.exports = router;