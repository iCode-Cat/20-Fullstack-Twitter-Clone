module.exports.isAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send('Please authenticate with an account.');
  }

  next();
};
