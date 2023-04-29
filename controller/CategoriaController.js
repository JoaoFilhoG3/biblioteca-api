var connection = require("../bd/connection.js");

class CategoriaController {
    /**
    * Método responsável por obter todas as categorias
    * do banco de dados.
    */
    getAll(request, response) { }

    /**
     * Método responsável por obter uma categoria do banco
     * de dados de acordo com seu id.
     */
    getById(request, response) { }

    /**
     * Método responsável por adicionar uma nova categoria
     * no banco de dados.
     */
    add(request, response) { }

    /**
     * Método responsável por atualizar uma categoria
     * existente do banco de dados.
     */
    update(request, response) { }

    /**
     * Método responsável por excluir uma categoria 
     * existente do banco de dados.
     */
    delete(request, response) { }
}

module.exports = new CategoriaController;