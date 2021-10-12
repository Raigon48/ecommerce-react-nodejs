const express = require('express');
const { getAllProducts } = require('./product.controller');

const Router = express.Router();

Router.route('/products').get(getAllProducts);

module.exports = Router;
