var connection = require("../bd/connection.js");

class LivroController {
    /**
    * Método responsável por obter todos os livros
    * do banco de dados.
    */
    getAll(request, response) {
        const sql = "SELECT *, c.nome as categoria FROM livro l INNER JOIN categoria c on (l.cod_cat = c.cod_cat)";
        connection.query(sql, (err, data) => {
            if (err) {
                response.json({ "erro": "Erro ao obter livros." });
            } else {
                data.map((livro)=>{
                    livro["categoria"] = {"cod_cat":livro["cod_cat"], "nome":livro["categoria"]}
                });
                response.json(data);
            }
        });
    }

    /**
     * Método responsável por obter um livro do banco
     * de dados de acordo com seu id.
     */
    getById(request, response) {
        const id = request.params["_id"];
        if (id) {
            const sql = "SELECT * FROM livro WHERE cod_cli = ?;";
            const params = [
                id
            ];
            connection.query(sql, params, (err, data) => {
                if (err) {
                    response.json({ "erro": "Erro ao obter o livro." });
                } else {
                    response.json(data[0]
                        ??
                        { "erro": "Não existe livro com esse código." });
                }
            });
        }
    }

    /**
     * Método responsável por adicionar um novo livro
     * no banco de dados.
     */
    add(request, response) {
        ////////////////////
        // Capturando valores informados via corpo da
        // requisição HTTP.
        ////////////////////
        const nome = request.body["nome"]; //OBRIGATÓRIO
        const anoPublicacao = request.body["ano_publicacao"]; //OBRIGATÓRIO
        const numPaginas = request.body["num_paginas"];
        const numExemplares = request.body["num_exemplares"];
        const autor = request.body["autor"];
        const codCat = request.body["cod_cat"];

        ////////////////////
        // Verificando se campos obrigatórios foram 
        // preenchidos.
        ////////////////////
        if (!nome) {
            response.json({ "erro": "Campo nome não pode ser vazio." });
        } else if (!anoPublicacao) {
            response.json({ "erro": "Campo ano de publicação não pode ser vazio." });
        } else if (!numPaginas) {
            response.json({ "erro": "Campo número de páginas não pode ser vazio." });
        } else if (!numExemplares) {
            response.json({ "erro": "Campo número de exemplares não pode ser vazio." });
        } else {
            ////////////////////
            // Criando query e definindo parametros
            ////////////////////
            const sql = "INSERT INTO livro " +
                "(cod_liv, nome, ano_publicacao, num_paginas, num_exemplares, autor, cod_cat) " +
                "VALUES(0, ?, ?, ?, ?, ?, ?);"
            const params = [
                nome,
                anoPublicacao,
                numPaginas,
                numExemplares,
                autor,
                codCat
            ];
            connection.query(sql, params, (err, data) => {
                if (err) {
                    response.json({ "erro": "Erro ao inserir o livro." });
                    console.log(err);
                } else {
                    response.json({ "mensagem": "Livro inserido com sucesso." });
                }
            });

        }
    }

    /**
     * Método responsável por atualizar um livro
     * existente do banco de dados.
     */
    update(request, response) {
        ////////////////////
        // Capturando ID do livro que vai ser alterado
        // e verificando se não está vazio.
        ////////////////////
        const id = request.params["_id"];
        if (id) {
            ////////////////////
            // Capturando valores do corpo da requisição
            ////////////////////
            const nome = request.body["nome"]; //OBRIGATÓRIO
            const anoPublicacao = request.body["ano_publicacao"]; //OBRIGATÓRIO
            const numPaginas = request.body["num_paginas"];
            const numExemplares = request.body["num_exemplares"];
            const autor = request.body["autor"];
            const codCat = request.body["cod_cat"];

            ////////////////////
            // Criando query e definindo parâmetros
            ////////////////////
            const sql = "UPDATE livro SET " +
                "nome = ?, " +
                "ano_publicacao = ?, " +
                "num_paginas = ?, " +
                "num_exemplares = ?, " +
                "autor = ?, " +
                "cod_cat = ? " +
                "WHERE cod_liv = ?;";
            const values = [
                nome,
                anoPublicacao,
                numPaginas,
                numExemplares,
                autor,
                codCat,
                id
            ];
            ////////////////////
            // Executando a query
            ////////////////////
            connection.query(sql, values, (err, data) => {
                if (err) {
                    response.json({ "erro": "Erro ao atualizar o livro." });
                    console.log(err);
                } else {
                    response.json({ "mensagem": "Livro alterado com sucesso." })
                }
            });

        }
    }

    /**
     * Método responsável por excluir um livro 
     * existente do banco de dados.
     */
    delete(request, response) {
        ////////////////////
        // Capturando ID do livro e verificando
        // se não está vazio
        ////////////////////
        const id = request.params["_id"];
        if(id){
            const sql = "DELETE FROM livro WHERE cod_liv = ?;";
            const values = [
                id
            ];

            connection.query(sql, values, (err, data)=>{
                if(err){
                    response.json({"erro":"Erro ao apagar livro."});
                    console.log(err);
                }else{
                    response.json({"mensagem":"Livro removido com sucesso."});
                }
            });
        }
    }
}

module.exports = new LivroController;