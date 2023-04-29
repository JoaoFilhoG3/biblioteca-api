var connection = require("../bd/connection.js");

class EmprestimoController {
    /**
    * Método responsável por obter todos os empréstimos
    * do banco de dados.
    */
    getAll(request, response) { }

    /**
     * Método responsável por obter um empréstimo do banco
     * de dados de acordo com seu id.
     */
    getById(request, response) { }

    /**
     * Método responsável por adicionar um novo empréstimo
     * no banco de dados.
     */
    add(request, response) { }

    /**
     * Método responsável por atualizar um empréstimo
     * existente do banco de dados.
     */
    update(request, response) { }

    /**
     * Método responsável por excluir um empréstimo 
     * existente do banco de dados.
     */
    delete(request, response) { }
}

module.exports = new EmprestimoController;