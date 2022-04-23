const Book = require('../models/Book');

const isValid = async (title, author_id) => {
  if (!title || typeof title !== 'string') return false;
  const author = await Book.getByAuthorId(Number(author_id));
  if (!author_id || author.length === 0) return false;
  return true;
};

const getAll = async () => await Book.getAll();

const getByAuthorId = async (author_id) => {
  const books = await Book.getByAuthorId(author_id);
  if (books.length === 0) return { error: { status: 404, message: 'Not found', code: 'notFound' } };
  return books
};

const getById = async (id) => {
  const book = await Book.getById(id);
  if (!book) return { error: { status: 404, message: 'Not found', code: 'notFound' } };
  return book;
};

const create = async (title, author_id) => {
  const validity = await isValid(title, author_id);
  if (!validity) return { error: { status: 400, message: 'Invalid data', code: 'invalidData' } };
  await Book.create(title, author_id);
  return { message: 'Book succesfully created!' };
};

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  create,
};
