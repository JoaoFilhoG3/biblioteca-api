var connection = require("../bd/connection.js");

class FuncionarioController {
    /**
    * Método responsável por obter todos os funcionários
    * do banco de dados.
    */
    getAll(request, response) { }

    /**
     * Método responsável por obter um funcionário do banco
     * de dados de acordo com seu id.
     */
    getById(request, response) { }

    /**
     * Método responsável por adicionar um novo funcionário
     * no banco de dados.
     */
    add(request, response) { }

    /**
     * Método responsável por atualizar um funcionário
     * existente do banco de dados.
     */
    update(request, response) { }

    /**
     * Método responsável por excluir um funcionário 
     * existente do banco de dados.
     */
    delete(request, response) { }
}

module.exports = new FuncionarioController;