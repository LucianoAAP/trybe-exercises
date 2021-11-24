const jwt = require('jsonwebtoken');
const secret = 'seusecretdetoken';

module.exports = (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next({ statusCode: 401, message: 'Token not found' });
  }
  try {
    const payload = jwt.verify(token, secret);
    req.user = payload;
    return next();
  } catch (err) {
    err.statusCode = 401;
    return next(err);
  }
};