const express = require('express');
const errorMiddleware = require('./middleware/error');
const { getPing } = require('./controllers/Ping');
const { getByCEP, createCEP } = require('./controllers/CEP');

const app = express();

app.use(express.json());

app.get('/ping', getPing);

app.get('/cep/:cep', getByCEP);

app.post('/cep', createCEP)

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
