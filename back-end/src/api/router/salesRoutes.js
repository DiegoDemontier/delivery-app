const express = require('express');
const { createSale, findSaleById, findAllSales } = require('../controllers/salesController');
const auth = require('../middleware/auth');

const routerUsers = express.Router();

routerUsers.post('/', auth, createSale);
routerUsers.get('/', auth, findAllSales);
routerUsers.get('/:id', auth, findSaleById);

module.exports = routerUsers;