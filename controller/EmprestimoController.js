var connection = require("../bd/connection.js");

class EmprestimoController {


    /**
    * Método responsável por obter todos os empréstimos
    * do banco de dados.
    */
    getAll(request, response) {
        const sql = "SELECT * FROM emprestimo";
        connection.query(sql, (err, data) => {
            if (err) {
                response.json({ "erro": "Erro ao obter emprestimos." });
            } else {
                data.map(emprestimo => {
                    const sql = "SELECT " +
                        "i.cod_emp," +
                        "l.cod_liv," +
                        "l.nome," +
                        "l.autor," +
                        "c.cod_cat," +
                        "c.nome FROM item_emprestimo i " +
                        "INNER JOIN livro l " +
                        "ON (i.cod_liv = l.cod_liv) " +
                        "INNER JOIN categoria c " +
                        "ON (l.cod_cat = c.cod_cat) " +
                        "WHERE cod_emp = ?;";
                    const params = [
                        emprestimo["cod_emp"]
                    ];
                    connection.query(sql, params, (err, itens) => {
                        if (err) {
                            response.json({ "erro": "Erro ao obter itens." });
                        } else {
                            //console.log(itens);
                            emprestimo["itens"] = itens;

                            console.log(data);
                        }
                    });
                });
                response.json(data);
                //console.log(data);
            }
        });
    }








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
        const dataDevolucao = request.body["data_devolucao"];
        const codCli = request.body["cod_cli"];
        const codFun = request.body["cod_fun"];
        const livros = request.body["livros"];

        if (!dataDevolucao) {
            response.json({ "erro": "O campo data de devolução é obrigatório." });
        } else if (!codCli) {
            response.json({ "erro": "O campo cod_cli é obrigatório." });
        } else if (!codFun) {
            response.json({ "erro": "O campo cod_fun é obrigatório." });
        } else if (!livros) {
            response.json({ "erro": "Você deve informar os livros a serem emprestados." });
        } else {
            const sqlEmp = "INSERT INTO emprestimo " +
                "(data_devolucao, estado, cod_cli, cod_fun) " +
                "values (?, \"EMPRESTADO\", ?, ?)";
            const params = [
                dataDevolucao,
                codCli,
                codFun
            ];
            connection.query(sqlEmp, params, (err, data) => {
                if (err) {
                    console.log(err);
                    response.json({ "erro": "Erro ao inserir empréstimo." });
                } else {
                    const codEmp = data["insertId"];
                    livros.map(livro => {
                        const sqlItem = "INSERT INTO item_emprestimo VALUES (?,?)";
                        const params = [
                            codEmp,
                            livro["cod_liv"]
                        ];
                        connection.query(sqlItem, params, (err, data) => {
                            if (err) {
                                response.json({
                                    "erro":
                                        "Erro ao inserir item do empréstimo de código "
                                        + livro["cod_liv"]
                                });
                            }
                        });
                    });
                    response.json({ "mensagem": "Empréstimo inserido com sucesso." })
                }
            });
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