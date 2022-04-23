const connection = require('./connection');

const isValid = ({ firstName, lastName, email, password }) => {
  const error1 = { error: true, message: 'Todos os campos são obrigatórios' };
  const error2 = { error: true, message: 'O campo password deve ser uma string de 6 ou mais caracteres' };
  if (!firstName || typeof firstName !== 'string') return error1;
  if (!lastName || typeof lastName !== 'string') return error1;
  if (!email || typeof email !== 'string') return error1;
  if (!password || typeof password !== 'string' || password.length < 6) return error2;
  return { error: false };
};

const create = async ({ firstName, lastName, email, password }) => {
  return await connection.execute(
    'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password],
  ).then(([result]) => ({ id: result.insertedId, firstName, lastName, email }));
};

const getAll = async () => {
  return await connection.execute('SELECT * FROM users_crud.users').then(([result]) => result);
};

const getById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM users_crud.users WHERE id = ?',
    [id],
  );
  if (result.length === 0) return null;
  const { first_name, last_name, email, password } = result[0];
  return { id, firstName: first_name, lastName: last_name, email, password };
};

const update = async ({ id, firstName, lastName, email, password }) => {
  await connection.execute(
    'UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
    [firstName, lastName, email, password, id],
  );
  return await getById(id);
};

module.exports = {
  isValid,
  create,
  getAll,
  getById,
  update,
};
