const express = require('express');
const Router = express.Router();
const { isAuth } = require('../../middleware/checkAuth');

Router.post('/flow/create', isAuth, require('./flow/createFlow'));
Router.get('/flow/:id', isAuth, require('./flow/getFlow'));
Router.delete('/flow/:id', isAuth, require('./flow/deleteFlow'));

module.exports = Router;
