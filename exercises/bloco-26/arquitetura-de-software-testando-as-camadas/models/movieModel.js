const mongoConnection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const movies = await moviesCollection
    .find()
    .toArray();

  return movies.map(({ _id, ...movieData }) => ({
    id: _id,
    ...movieData,
  }));
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const movie = await mongoConnection.getConnection()
    .then((db) => db.collection('movies').findOne(ObjectId(id)));
  if (!movie) return null;
  const { title, directedBy, releaseYear } = movie;
  return { id, title, directedBy, releaseYear };
};

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
    title, 
    directedBy, 
    releaseYear
  };
};

const deleteMovie = async (id) => {
  const movie = await getById(id);
  if (!movie) return null;
  const { title, directedBy, releaseYear } = movie;
  await mongoConnection.getConnection()
    .then((db) => db.collection('movies').deleteOne({ _id: ObjectId(id) }));
  return { id, title, directedBy, releaseYear };
};

module.exports = {
  create,
  getAll,
  getById,
  deleteMovie,
};