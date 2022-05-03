const express = require('express');
const passport = require('passport');
const {
  authRegisterPost,
  authGoogle,
  isAuthenticated,
} = require('../controller/authController');
const Router = express.Router();
const { isAuth } = require('../../middleware/checkAuth');

Router.get('/logged', isAuth, authRegisterPost);

// @router /auth/google
// @desc Get users profile by gmail
Router.get('/', authGoogle);
Router.get('/is_auth', isAuthenticated);
// @router /auth/google/callback
// @desc Get Authenticate users by their gmail
Router.get(
  '/callback',
  passport.authenticate('google', { failureRedirect: '/login', session: true }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(process.env.REDIRECT_AUTH);
  }
);

module.exports = Router;
