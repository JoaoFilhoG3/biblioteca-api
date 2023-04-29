

var connection = require("../bd/connection.js");

class ClienteController {
    /**
     * Método responsável por obter todos os clientes
     * do banco de dados.
     */
    getAll(request, response) {
        const sql = "SELECT * FROM cliente";
        connection.query(sql, (err, data) => {
            if (err) {
                response.json({ "erro": "Erro ao obter clientes." });
            } else {
                response.json(data);
            }
        });
    }

    /**
     * Método responsável por obter um cliente do banco
     * de dados de acordo com seu id.
     */
    getById(request, response) {
        const id = request.params["_id"];
        if (id) {
            const sql = "SELECT * FROM cliente WHERE cod_cli = ?;";
            const params = [
                id
            ];
            connection.query(sql, params, (err, data) => {
                if (err) {
                    response.json({ "erro": "Erro ao obter o cliente." });
                } else {
                    response.json(data[0]
                        ??
                        { "erro": "Não existe cliente com esse código." });
                }
            });
        }
    }

    /**
     * Método responsável por adicionar um novo cliente
     * no banco de dados.
     */
    add(request, response) {
        ////////////////////
        // Capturando valores informados via corpo da
        // requisição HTTP.
        ////////////////////
        const nome = request.body["nome"]; //OBRIGATÓRIO
        const dataNascimento = request.body["data_nascimento"]; //OBRIGATÓRIO
        const cpf = request.body["cpf"];
        const rg = request.body["rg"];
        const telefone = request.body["telefone"];
        const endereco = request.body["endereco"];

        ////////////////////
        // Verificando se campos obrigatórios foram 
        // preenchidos.
        ////////////////////
        if (!nome) {
            response.json({ "erro": "Campo nome não pode ser vazio." });
        } else if (!dataNascimento) {
            response.json({ "erro": "Campo data de nascimento não pode ser vazio." });
        } else {
            ////////////////////
            // Criando query e definindo parametros
            ////////////////////
            const sql = "INSERT INTO cliente " +
                "(cod_cli, nome, data_nascimento, cpf, rg, telefone, endereco) " +
                "VALUES(0, ?, ?, ?, ?, ?, ?);"
            const params = [
                nome,
                dataNascimento,
                cpf,
                rg,
                telefone,
                endereco
            ];
            connection.query(sql, params, (err, data) => {
                if (err) {
                    response.json({ "erro": "Erro ao inserir o cliente." });
                    console.log(err);
                } else {
                    response.json({"mensagem":"Cliente inserido com sucesso."});
                }
            });

        }
    }

    /**
     * Método responsável por atualizar um cliente
     * existente do banco de dados.
     */
    update(request, response) {
        ////////////////////
        // Capturando ID do cliente que vai ser alterado
        // e verificando se não está vazio.
        ////////////////////
        const id = request.params["_id"];
        if (id) {
            ////////////////////
            // Capturando valores do corpo da requisição
            ////////////////////
            const nome = request.body["nome"]; 
            const dataNascimento = request.body["data_nascimento"]; 
            const cpf = request.body["cpf"];
            const rg = request.body["rg"];
            const telefone = request.body["telefone"];
            const endereco = request.body["endereco"];

            ////////////////////
            // Criando query e definindo parâmetros
            ////////////////////
            const sql = "UPDATE cliente SET " +
                "nome = ?, " +
                "data_nascimento = ?, " +
                "cpf = ?, " +
                "rg = ?, " +
                "telefone = ?, " +
                "endereco = ? " +
                "WHERE cod_cli = ?;";
            const values = [
                nome,
                dataNascimento,
                cpf,
                rg,
                telefone,
                endereco,
                id
            ];
            ////////////////////
            // Executando a query
            ////////////////////
            connection.query(sql, values, (err, data) => {
                if (err) {
                    response.json({ "erro": "Erro ao atualizar o cliente." });
                    console.log(err);
                } else {
                    response.json({"mensagem":"Cliente alterado com sucesso."})
                }
            });

        }

    }

    /**
     * Método responsável por excluir um cliente 
     * existente do banco de dados.
     */
    delete(request, response) {
        ////////////////////
        // Capturando ID do cliente e verificando
        // se não está vazio
        ////////////////////
        const id = request.params["_id"];
        if(id){
            const sql = "DELETE FROM cliente WHERE cod_cli = ?;";
            const values = [
                id
            ];

            connection.query(sql, values, (err, data)=>{
                if(err){
                    response.json({"erro":"Erro ao apagar cliente."});
                    console.log(err);
                }else{
                    response.json({"mensagem":"Cliente removido com sucesso."});
                }
            });
        }

    }
}

module.exports = new ClienteController;