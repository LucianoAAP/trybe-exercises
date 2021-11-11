const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'lucianoaap',
    password: 'gatouber',
    database: 'model_example' });

module.exports = connection;
