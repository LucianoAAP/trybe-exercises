const rescue = require('express-rescue');
const users = require('../services/users.js');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const secret = 'seusecretdetoken';

const validateBody = (body) => (Joi.object({
  username: Joi.string().min(5).alphanum().required(),
  password: Joi.string().min(5).required(),
}).validate(body));

module.exports = rescue(async (req, res, next) => {
  const { username, password } = req.body;
  if (validateBody(req.body).error) return next(validateBody(req.body).error);
  const payload = await users.create(username, password);
  if (payload.error) return next(payload.error);
  const jwtConfig = {
    expiresIn: '1h',
  };
  const token = jwt.sign(payload, secret, jwtConfig);
  return res.status(200).json({ token });
});