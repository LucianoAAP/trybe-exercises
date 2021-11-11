const express = require('express');

const app = express();

app.use(express.json());

const Book = require('./models/Book');

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();

  return res.status(200).json(books);
});

app.get('/books/search', async (req, res) => {
  const { author_id } = req.query;

  const books = await Book.getByAuthorId(author_id);

  if (!books) return res.status(404).json({ message: 'Not found' });

  return res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.getById(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  return res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  const response = await Book.isValid(title, author_id);

  if (!response) return res.status(400).json({ message: 'Invalid data' });

  await Book.create(title, author_id);

  return res.status(201).json({ message: 'Book succesfully created!'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
