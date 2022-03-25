const passport = require('passport');

// @router /api/auth/register
// @desc POST User Registiration
module.exports.authRegisterPost = async (req, res, next) => {
  res.send('HELLO WORLD!');
};

module.exports.isAuthenticated = async (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.status(200).json({ msg: req.user });
  }
  return res.status(401).json({ msg: 'you are not authenticated' });
};

// @router /api/auth
// @desc POST User Registiration
module.exports.authGoogle = passport.authenticate('google', {
  scope: ['profile'],
});

// @router /api/auth/callback
// @desc POST User Registiration
