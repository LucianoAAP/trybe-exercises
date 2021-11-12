const connection = require('./connection');
const { ObjectId } = require('mongodb');

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
  return connection().then((db) => db.collection('user').insertOne({
    firstName,
    lastName,
    email,
    password,
  })).then((result) => ({ id: result.insertedId, firstName, lastName, email }));
};

const getAll = async () => {
  return await connection().then((db) => db.collection('user').find().toArray());
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const user = await connection().then((db) => db.collection('user').findOne(ObjectId(id)));
  if (!user) return null;
  return user;
};

const update = async ({ id, firstName, lastName, email, password }) => {
  await connection().then((db) => db.collection('user').update(
    { _id: ObjectId(id) },
    { $set: { firstName, lastName, email, password } },
  ));
  return await getById(id);
};

module.exports = {
  isValid,
  create,
  getAll,
  getById,
  update,
};