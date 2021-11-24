module.exports = (req, res, next) => {
  const { admin } = req.user;
  if (!admin) return next({ statusCode: 403, message: 'Restricted access' });
  return next();
};