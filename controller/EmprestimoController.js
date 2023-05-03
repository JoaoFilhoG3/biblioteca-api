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
    add(request, response) {
        ////////////////////
        // Capturando valores informados via
        // corpo da requisição HTTP
        ////////////////////
        const dataHoraEmp = request.body["data_hora_emp"];
        const dataDevolucao = request.body["data_devolucao"];
        const codCli = request.body["cod_cli"];
        const codFun = request.body["cod_fun"];
        const livros = request.body["livros"];

        if(!dataHoraEmp){
            response.json({"erro":"O campo data/hora do empréstimo é obrigatório."});
        }else if(!dataDevolucao){
            response.json({"erro":"O campo data de devolução é obrigatório."});
        }else if(!codCli){
            response.json({"erro":"O campo cod_cli é obrigatório."});
        }else if(!codFun){
            response.json({"erro":"O campo cod_fun é obrigatório."});
        }else{
            
        }
    }

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