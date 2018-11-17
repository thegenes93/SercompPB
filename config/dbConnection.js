var mysql = require('mysql');

var connMySQL = function () {
    return connection = mysql.createConnection({
        host: 'servidor',
        port:'porta',
        user: 'usuari',
        password: 'senha',
        database: 'nomedobanco'
    });
}

module.exports = function () {
    return connMySQL;
}
