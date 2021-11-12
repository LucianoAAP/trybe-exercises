const express = require('express');
const rescue = require('express-rescue');
const errorMiddleware = require('./middleware/error');
const User = require('./models/mongo/User.js');

const app = express();

app.use(express.json());

app.post('/user', rescue(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const validity = User.isValid({ firstName, lastName, email, password });
  if (validity.error) return res.status(400).json({ message: validity.message });
  const response = await User.create({ firstName, lastName, email, password });
  return res.status(201).json({
    id: response.id,
    firstName: response.firstName,
    lastName: response.lastName,
    email: response.email,
  });
}));

app.get('/user', rescue(async (_req, res) => {
  const response = await User.getAll();
  return res.status(200).json(response);
}));

app.get('/user/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const user = await User.getById(id);
  if (!user) return res.status(404).json({ error: true, message: "Usuário não encontrado" });
  return res.status(200).json(user);
}));

app.put('/user/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const validity = User.isValid({ firstName, lastName, email, password });
  if (validity.error) return res.status(400).json({ message: validity.message });
  const user = await User.getById(id);
  if (!user) return res.status(404).json({ error: true, message: "Usuário não encontrado" });
  const response = await User.update({ id, firstName, lastName, email, password });
  return res.status(201).json({
    id: response.id,
    firstName: response.firstName,
    lastName: response.lastName,
    email: response.email,
  });
}));

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
