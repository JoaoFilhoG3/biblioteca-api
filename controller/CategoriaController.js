var connection = require("../bd/connection.js");

class CategoriaController {
    /**
    * Método responsável por obter todas as categorias
    * do banco de dados.
    */
    getAll(request, response) {
        const sql = "SELECT * FROM categoria";
        connection.query(sql, (err, data) => {
            if (err) {
                response.json({ "erro": "Erro ao obter categorias." });
            } else {
                response.json(data);
            }
        });
    }

    /**
     * Método responsável por obter uma categoria do banco
     * de dados de acordo com seu id.
     */
    getById(request, response) {
        const id = request.params["_id"];
        if (id) {
            const sql = "SELECT * FROM categoria WHERE cod_cat = ?;";
            const params = [
                id
            ];
            connection.query(sql, params, (err, data) => {
                if (err) {
                    response.json({ "erro": "Erro ao obter a categoria." });
                } else {
                    response.json(data[0]
                        ??
                        { "erro": "Não existe categoria com esse código." });
                }
            });
        }
    }

    /**
     * Método responsável por adicionar uma nova categoria
     * no banco de dados.
     */
    add(request, response) {
        ////////////////////
        // Capturando valores informados via corpo da
        // requisição HTTP.
        ////////////////////
        const nome = request.body["nome"]; //OBRIGATÓRIO

        ////////////////////
        // Verificando se campos obrigatórios foram 
        // preenchidos.
        ////////////////////
        if (!nome) {
            response.json({ "erro": "Campo nome não pode ser vazio." });
        } else {
            ////////////////////
            // Criando query e definindo parametros
            ////////////////////
            const sql = "INSERT INTO categoria " +
                "(cod_cat, nome) " +
                "VALUES(0, ?);"
            const params = [
                nome,
            ];
            connection.query(sql, params, (err, data) => {
                if (err) {
                    response.json({ "erro": "Erro ao inserir a categoria." });
                    console.log(err);
                } else {
                    response.json({"mensagem":"categoria inserida com sucesso."});
                }
            });

        }
    }

    /**
     * Método responsável por atualizar uma categoria
     * existente do banco de dados.
     */
    update(request, response) {
        ////////////////////
        // Capturando ID da categoria que vai ser alterado
        // e verificando se não está vazio.
        ////////////////////
        const id = request.params["_id"];
        if (id) {
            ////////////////////
            // Capturando valores do corpo da requisição
            ////////////////////
            const nome = request.body["nome"];

            ////////////////////
            // Criando query e definindo parâmetros
            ////////////////////
            const sql = "UPDATE categoria SET " +
                "nome = ?, " +
                "WHERE cod_cat = ?;";
            const values = [
                nome,
                id
            ];
            ////////////////////
            // Executando a query
            ////////////////////
            connection.query(sql, values, (err, data) => {
                if (err) {
                    response.json({ "erro": "Erro ao atualizar a categoria." });
                    console.log(err);
                } else {
                    response.json({"mensagem":"Categoria alterada com sucesso."})
                }
            });

        }
    }

    /**
     * Método responsável por excluir uma categoria 
     * existente do banco de dados.
     */
    delete(request, response) {
        ////////////////////
        // Capturando ID da categoria e verificando
        // se não está vazia
        ////////////////////
        const id = request.params["_id"];
        if(id){
            const sql = "DELETE FROM categoria WHERE cod_cat = ?;";
            const values = [
                id
            ];

            connection.query(sql, values, (err, data)=>{
                if(err){
                    response.json({"erro":"Erro ao apagar categoria."});
                    console.log(err);
                }else{
                    response.json({"mensagem":"Categoria removida com sucesso."});
                }
            });
        }
    }
}

module.exports = new CategoriaController;