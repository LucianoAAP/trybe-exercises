const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if(!authorization || authorization.length !== 12) {
    return res.status(401).json({
      message: "invalid token"
    })
  }
  return next();
}

module.exports = auth;