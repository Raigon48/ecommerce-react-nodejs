const express = require('express');

const app = express();

app.use(express.json());

//Router imports
const productRouter = require('./modules/product/product.route');

app.use('/api/v1', productRouter);

module.exports = app;
