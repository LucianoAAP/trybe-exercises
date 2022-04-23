const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'lucianoaap',
    password: 'gatouber',
    database: 'cep_lookup' });

module.exports = connection;
