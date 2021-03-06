const express = require('express');
const { findAllProducts } = require('../../controllers/products');

const productsRoutes = express.Router();

productsRoutes.get('/', findAllProducts);

module.exports = productsRoutes;