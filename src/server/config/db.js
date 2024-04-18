const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'mydb',
};

const connection = mysql.createPool(dbConfig);

module.exports = connection;