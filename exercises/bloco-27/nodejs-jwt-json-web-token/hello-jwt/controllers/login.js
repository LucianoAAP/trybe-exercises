const rescue = require('express-rescue');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const secret = 'seusecretdetoken';

const validateBody = (body) => (Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),
  }).validate(body));

const verifyAdmin = (username, password) => {
  if (username === 'admin' && password !== 's3nh4S3gur4???') {
    return { error: { statusCode: 401, message: 'senha incorreta' } };
  }
  if (username === 'admin' && password === 's3nh4S3gur4???') return true;
  return false
};

module.exports = rescue((req, res, next) => {
  const { username, password } = req.body;
  if (validateBody(req.body).error) return next(validateBody(req.body).error);
  const jwtConfig = {
    expiresIn: '1h',
  };
  const admin = verifyAdmin(username, password);
  if (admin.error) return next(admin.error);
  const payload = { username, admin };
  const token = jwt.sign(payload, secret, jwtConfig);
  return res.status(200).json({ token });
});
