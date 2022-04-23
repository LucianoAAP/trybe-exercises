module.exports = {
  development: {
    username: 'lucianoaap',
    password: 'gatouber',
    database: 'associations',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'lucianoaap',
    password: 'gatouber',
    database: 'orm_assoc_test_db',
    host: '127.0.0.1',
    dialect: 'mysql',
    // adicione essa linha a sua configuração para omitir mensagens de log no orm
    logging: false,
  },
  production: {
    username: 'lucianoaap',
    password: 'gatouber',
    database: 'associations',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};