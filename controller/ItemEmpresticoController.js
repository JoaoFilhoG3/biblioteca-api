var connection = require("../bd/connection.js");

class ItemEmprestimoController {
    /**
    * Método responsável por obter todos os itens de um determinado empréstimo
    * do banco de dados de acordo com o id do empréstimo.
    */
    getAll(request, response) { }

    /**
     * Método responsável por obter um item de um empréstimo do banco
     * de dados de acordo com seu id e com o id do empréstimo.
     */
    getById(request, response) { }

    /**
     * Método responsável por adicionar um novo item de um empréstimo
     * no banco de dados.
     */
    add(request, response) { }

    /**
     * Método responsável por atualizar um item de um empréstimo
     * existente do banco de dados.
     */
    update(request, response) { }

    /**
     * Método responsável por excluir um item de um empréstimo 
     * existente do banco de dados.
     */
    delete(request, response) { }
}

module.exports = new ItemEmprestimoController;