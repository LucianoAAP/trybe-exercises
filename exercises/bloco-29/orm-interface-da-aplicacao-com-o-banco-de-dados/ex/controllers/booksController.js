const express = require('express');
const { Book } = require('../models');
const rescue = require('express-rescue');
const router = express.Router();

router.get('/', rescue(async (_req, res) => {
  const books = await Book.findAll({ order: [['title'], ['createdAt', 'DESC']] });
  return res.status(200).json(books);
}));

router.get('/author', rescue(async (req, res, next) => {
  const { author } = req.body;
  const book = await Book.findOne({ where: { author }});
  if (!book) return next({ status: '404', code: 'notFound', message: 'not found' });
  return res.status(200).json(book);
}));

router.get('/:id', rescue(async (req, res, next) => {
  const { id } = req.params;
  const book = await Book.findByPk(id);
  if (!book) return next({ status: '404', code: 'notFound', message: 'not found' });
  return res.status(200).json(book);
}));

router.post('/', rescue(async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = await Book.create({ title, author, pageQuantity });
  return res.status(201).json(book);
}));

router.put('/:id', rescue(async (req, res, next) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const book = await Book.findByPk(id);
  if (!book) return next({ status: '404', code: 'notFound', message: 'not found' });
  await Book.update({ title, author, pageQuantity }, { where: { id } });
  const newBook = await Book.findByPk(id);
  return res.status(200).json(newBook);
}));

router.delete('/:id', rescue(async (req, res, next) => {
  const { id } = req.params;
  const book = await Book.findByPk(id);
  if (!book) return next({ status: '404', code: 'notFound', message: 'not found' });
  await Book.destroy({ where: { id } });
  return res.status(200).json(book);
}));

module.exports = router;