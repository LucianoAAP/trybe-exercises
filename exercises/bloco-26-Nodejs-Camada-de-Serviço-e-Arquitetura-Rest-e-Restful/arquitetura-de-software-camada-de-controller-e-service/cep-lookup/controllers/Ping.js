const rescue = require('express-rescue');

const getPing = rescue((_req, res) => {
  return res.status(200).json({ message: 'pong!' });
});

module.exports = { getPing };
