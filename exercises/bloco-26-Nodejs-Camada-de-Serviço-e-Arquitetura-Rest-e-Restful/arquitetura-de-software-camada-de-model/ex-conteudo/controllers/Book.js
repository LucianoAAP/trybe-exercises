const rescue = require('express-rescue');
const Book = require('../services/Book');

const getAll = rescue(async (_req, res) => {
  const books = await Book.getAll();
  return res.status(200).json(books);
});

const getByAuthorId = rescue(async (req, res, next) => {
  const { author_id } = req.query;

  const books = await Book.getByAuthorId(author_id);

  if (books.error) return next(books.error);

  return res.status(200).json(books);
});

const getById = rescue(async (req, res, next) => {
  const { id } = req.params;

  const book = await Book.getById(id);

  if (book.error) return next(book.error);

  return res.status(200).json(book);
});

const create = rescue(async (req, res, next) => {
  const { title, author_id } = req.body;
  const book = await Book.create(title, author_id);
  if (book.error) return next(book.error);
  return res.status(201).json({ message: book.message});
});

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  create,
};
