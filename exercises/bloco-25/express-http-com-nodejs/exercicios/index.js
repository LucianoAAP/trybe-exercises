const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.json({ message: 'pong' }));

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (parseInt(age) > 17) return res.status(200).json({ message: `Hello, ${name}!` });
  return res.status(401).json({ message: 'Unauthorized' });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get('/simpsons', async (_req, res) => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8').then((r) => JSON.parse(r));
  return res.status(200).json(simpsons);
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8').then((r) => JSON.parse(r));
  const simpson = simpsons.find((simpson) => simpson.id === id);
  if (!simpson) return res.status(404).json({ message: 'simpson not found' });
  return res.status(200).json(simpson);
});

app.use((err, _req, res, _next) => res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`));

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
