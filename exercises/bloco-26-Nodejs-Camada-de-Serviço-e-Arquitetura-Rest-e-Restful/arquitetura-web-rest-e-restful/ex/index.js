const express = require('express');
const errorMiddleware = require('./middleware/error');

const app = express();
app.use(express.json());

app.use('/products', require('./controllers/productController'));

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
