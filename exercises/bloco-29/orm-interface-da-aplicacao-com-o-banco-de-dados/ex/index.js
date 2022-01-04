const express = require('express');
const errorMiddleware = require('./middleware/error');

const booksController = require('./controllers/booksController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/books', booksController);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

module.exports = app;