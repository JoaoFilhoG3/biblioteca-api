var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "biblioteca"
});
connection.connect();

module.exports = connection;