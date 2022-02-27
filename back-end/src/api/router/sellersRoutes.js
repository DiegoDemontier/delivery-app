const express = require('express');
const { findAllSellers } = require('../controllers/usersController');

const sellersRoutes = express.Router();

sellersRoutes.get('/', findAllSellers);

module.exports = sellersRoutes;