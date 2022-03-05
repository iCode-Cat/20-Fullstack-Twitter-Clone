const passport = require('passport');

// @router /api/auth/register
// @desc POST User Registiration
module.exports.authRegisterPost = async (req, res, next) => {
  res.send('HELLO WORLD!');
};

// @router /api/auth
// @desc POST User Registiration
module.exports.authGoogle = passport.authenticate('google', {
  scope: ['profile'],
});

// @router /api/auth/callback
// @desc POST User Registiration
