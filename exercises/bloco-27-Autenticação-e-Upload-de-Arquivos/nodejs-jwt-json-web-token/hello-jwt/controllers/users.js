const rescue = require('express-rescue');

const me = rescue((req, res) => {
  const { username, admin } = req.user;
  res.status(200).json({ username, admin });
});

module.exports = { me };
