const express = require('express');
const rescue = require('express-rescue');
const auth = require("./middleware/auth");
const readApi = require('./middleware/readApi.js');
const errorMiddleware = require('./middleware/error');

const app = express();

app.use(express.json());
app.use(auth);

app.get("/btc/price", rescue(async (_req, res, _next) => {
  const api = await readApi();
  res.status(202).json(api);
}));

app.use(errorMiddleware);

app.listen(3000, () => console.log("ouvindo na porta 3000"));
