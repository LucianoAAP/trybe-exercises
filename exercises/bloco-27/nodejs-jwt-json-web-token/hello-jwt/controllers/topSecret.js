const rescue = require('express-rescue');

module.exports = rescue((_req, res) => {
  res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
});