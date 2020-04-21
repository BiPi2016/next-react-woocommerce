const express = require('express');

const myController = require('../Controllers/myController');

const Router = express();

Router.get('/products', myController.getAllProds);

//Router.get('/product/:slug/:id', myController.getProduct);

module.exports = Router;