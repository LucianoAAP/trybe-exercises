const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.send('Está vivo!!!');
});

app.get('/erro', (_req, res) => {
  res.send('kaput!');
  process.exit(1);
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Escutando na porta ${port}`);