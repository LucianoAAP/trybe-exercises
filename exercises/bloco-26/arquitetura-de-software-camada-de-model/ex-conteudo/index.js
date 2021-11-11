const express = require('express');

const app = express();

app.use(express.json());

const Book = require('./models/Book');

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

app.get('/books/search', async (req, res) => {
  const { author_id } = req.query;

  const books = await Book.getByAuthorId(author_id);

  if (!books) return res.status(404).json({ message: 'Inválid author id' });

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.getById(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(book);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
