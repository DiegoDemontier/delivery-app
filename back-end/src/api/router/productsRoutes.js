const express = require('express');
const { findAllProducts } = require('../controllers/productsController');

const productsRoutes = express.Router();

productsRoutes.get('/', findAllProducts);

module.exports = productsRoutes;