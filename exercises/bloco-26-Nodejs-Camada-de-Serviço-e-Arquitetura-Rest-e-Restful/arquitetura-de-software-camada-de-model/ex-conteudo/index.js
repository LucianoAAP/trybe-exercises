const express = require('express');
const errorMiddleware = require('./middleware/error');
const { getAll, getByAuthorId, getById, create } = require('./controllers/Book');

const app = express();

app.use(express.json());


app.get('/books', getAll);

app.get('/books/search', getByAuthorId);

app.get('/books/:id', getById);

app.post('/books', create);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
