const express = require('express');
const { isAuth } = require('../../middleware/checkAuth');
const Router = express.Router();
const {
  createOrGetProfile,
  getUserProfile,
  updateProfile,
} = require('../controller/profileController');

// User Profile
Router.get('/profile', isAuth, createOrGetProfile);
Router.put('/profile', isAuth, updateProfile);
Router.get('/profile/:id', isAuth, getUserProfile);

module.exports = Router;
