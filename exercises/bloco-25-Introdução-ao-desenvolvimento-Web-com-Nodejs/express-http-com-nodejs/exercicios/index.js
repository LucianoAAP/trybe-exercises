const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');
const crypto = require('crypto');

const generateToken = () => crypto.randomBytes(8).toString('hex');

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }

  return next();
};

const app = express();
app.use(bodyParser.json());
// app.use(auth);

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

app.post('/simpsons', async (req, res) => {
  const { id, nome } = req.body;
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8').then((r) => JSON.parse(r));
  if (simpsons.find((simpson) => simpson.id === id)) {
    return res.status(409).json({ message: 'id already exists' });
  }
  const newSimpsons = [...simpsons, { id, nome }];
  await fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
  res.status(204).end();
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if (!email || !password || !firstName || !phone) {
    return res.status(401).json({ message: 'missing fields' });
  }
  const token = generateToken();
  return res.status(200).json({ token });
});

app.use((err, _req, res, _next) => res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`));

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
