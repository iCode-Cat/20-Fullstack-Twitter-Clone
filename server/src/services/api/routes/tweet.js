const express = require('express');
const { isAuth } = require('../../middleware/checkAuth');
const Router = express.Router();

const { tweetCreate, tweetAll } = require('../controller/tweetController');

Router.post('/tweet/create', isAuth, tweetCreate);
Router.get('/tweet/all', isAuth, tweetAll);
// Router.put('/profile', isAuth, updateProfile);
// Router.get('/profile/:id', isAuth, getUserProfile);

module.exports = Router;
