var mysql = require('mysql');

var connMySQL = function () {
    return connection = mysql.createConnection({
        host: 'mysql642.umbler.com',
        port:'41890',
        user: 'develoops',
        password: 'senhaDEVE',
        database: 'kong'
    });
}

module.exports = function () {
    return connMySQL;
}