const connection = require('./connectionM');
const { ObjectId } = require('mongodb');

const add = async (name, brand) => {
  try {
    return await connection().then((db) => db.collection('products').insertOne({ name, brand }))
      .then((result) => ({ id: result.insertedId, name, brand }));
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    return await connection().then((db) => db.collection('products').find().toArray());
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  try {
    const result = await connection().then((db) => db.collection('products').findOne(ObjectId(id)));
    if (!result) return null
    return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    await connection().then((db) => db.collection('products').update(
      { _id: ObjectId(id) },
      { $set: { name, brand } },
    ));
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);
    if (!product) return {};
    await connection().then((db) => db.collection('products').deleteOne({ _id: ObjectId(id) }));
    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };
