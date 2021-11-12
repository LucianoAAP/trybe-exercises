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



module.exports = {
  isValid,
  create,
  getAll,
  getById,
  update,
};
