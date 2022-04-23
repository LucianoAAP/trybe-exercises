const express = require('express');
const errorMiddleware = require('./middleware/error');
const Plants = require('./plants');

const app = express();
app.use(express.json());

app.get('/plants', (_req, res) => {
  return res.status(200).json(Plants.getPlants());
});

app.get('/plant/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json(Plants.getPlantById(id));
});

app.delete('/plant/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json(Plants.removePlantById(id));
});

app.put('/plant/:id', (req, res) => {
  const { id } = req.params;
  const newPlant = req.body.plant;
  res.status(200).json(Plants.editPlant(id, newPlant));
});

app.post('/plant', (req, res) => {
  const newPlant = req.body.plant;
  res.status(201).json(Plants.createNewPlant(newPlant));
});

app.get('/sunny/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json(Plants.getPlantsThatNeedsSunWithId(id));
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
