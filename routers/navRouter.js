const express = require('express');

const navController = require('../Controllers/navController');
const myController = require('../Controllers/myController');

const Router = express.Router();

Router.get('/about', navController.getAbout);

module.exports = Router;