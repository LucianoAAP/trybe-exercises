const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.send('It is alive!!!');
});

app.get('/erro', (_req, res) => {
  res.send('eitcha lelê!');
  process.exit(1);
});

const port = process.env.PORT || 3001;

app.listen(port);
console.log(`Escutando na porta ${port}`);