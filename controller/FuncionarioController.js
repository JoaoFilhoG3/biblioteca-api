var connection = require("../bd/connection.js");

class FuncionarioController {
    /**
    * Método responsável por obter todos os funcionários
    * do banco de dados.
    */
    getAll(request, response) {
        const sql = "SELECT * FROM funcionario";
        connection.query(sql, (err, data) => {
            if (err) {
                response.json({ "erro": "Erro ao obter funcionários." });
            } else {
                response.json(data);
            }
        });
    }

    /**
     * Método responsável por obter um funcionário do banco
     * de dados de acordo com seu id.
     */
    getById(request, response) {
        const id = request.params["_id"];
        if (id) {
            const sql = "SELECT * FROM funcionario WHERE cod_fun = ?;";
            const params = [
                id
            ];
            connection.query(sql, params, (err, data) => {
                if (err) {
                    response.json({ "erro": "Erro ao obter o funcionário." });
                } else {
                    response.json(data[0]
                        ??
                        { "erro": "Não existe funcionário com esse código." });
                }
            });
        }
    }

    /**
     * Método responsável por adicionar um novo funcionário
     * no banco de dados.
     */
    add(request, response) {
        ////////////////////
        // Capturando valores informados via corpo da
        // requisição HTTP.
        ////////////////////
        const nome = request.body["nome"]; //OBRIGATÓRIO
        const rg = request.body["rg"];
        const cpf = request.body["cpf"];

        ////////////////////
        // Verificando se campos obrigatórios foram 
        // preenchidos.
        ////////////////////
        if (!nome) {
            response.json({ "erro": "Campo nome não pode ser vazio." });
        } else if (!cpf) {
            response.json({ "erro": "Campo cpf não pode ser vazio." });
        } else {
            ////////////////////
            // Criando query e definindo parametros
            ////////////////////
            const sql = "INSERT INTO funcionario " +
                "(cod_fun, nome, rg, cpf) " +
                "VALUES(0, ?, ?, ?);"
            const params = [
                nome,
                rg,
                cpf,
            ];
            connection.query(sql, params, (err, data) => {
                if (err) {
                    response.json({ "erro": "Erro ao inserir o funcionário." });
                    console.log(err);
                } else {
                    response.json({"mensagem":"Funcionário inserido com sucesso."});
                }
            });

        }
    }

    /**
     * Método responsável por atualizar um funcionário
     * existente do banco de dados.
     */
    update(request, response) {
        ////////////////////
        // Capturando ID do funcionário que vai ser alterado
        // e verificando se não está vazio.
        ////////////////////
        const id = request.params["_id"];
        if (id) {
            ////////////////////
            // Capturando valores do corpo da requisição
            ////////////////////
            const nome = request.body["nome"]; 
            const rg = request.body["rg"];
            const cpf = request.body["cpf"];

            ////////////////////
            // Criando query e definindo parâmetros
            ////////////////////
            const sql = "UPDATE funcionario SET " +
                "nome = ?, " +
                "rg = ?, " +
                "cpf = ?, " +
                "WHERE cod_fun = ?;";
            const values = [
                nome,
                rg,
                cpf,
                id
            ];
            ////////////////////
            // Executando a query
            ////////////////////
            connection.query(sql, values, (err, data) => {
                if (err) {
                    response.json({ "erro": "Erro ao atualizar o funcionário." });
                    console.log(err);
                } else {
                    response.json({"mensagem":"Funcionário alterado com sucesso."})
                }
            });

        }
    }

    /**
     * Método responsável por excluir um funcionário 
     * existente do banco de dados.
     */
    delete(request, response) {
        ////////////////////
        // Capturando ID do funcionário e verificando
        // se não está vazio
        ////////////////////
        const id = request.params["_id"];
        if(id){
            const sql = "DELETE FROM funcionario WHERE cod_fun = ?;";
            const values = [
                id
            ];

            connection.query(sql, values, (err, data)=>{
                if(err){
                    response.json({"erro":"Erro ao apagar funcionário."});
                    console.log(err);
                }else{
                    response.json({"mensagem":"Funcionário removido com sucesso."});
                }
            });
        }
    }
}

module.exports = new FuncionarioController;