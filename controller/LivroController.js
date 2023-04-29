var connection = require("../bd/connection.js");

class LivroController {
    /**
    * Método responsável por obter todos os livros
    * do banco de dados.
    */
    getAll(request, response) { }

    /**
     * Método responsável por obter um livro do banco
     * de dados de acordo com seu id.
     */
    getById(request, response) { }

    /**
     * Método responsável por adicionar um novo livro
     * no banco de dados.
     */
    add(request, response) { }

    /**
     * Método responsável por atualizar um livro
     * existente do banco de dados.
     */
    update(request, response) { }

    /**
     * Método responsável por excluir um livro 
     * existente do banco de dados.
     */
    delete(request, response) { }
}

module.exports = new LivroController;