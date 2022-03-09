const express = require('express');
const { createSale, findSaleById } = require('../../controllers/sales');
const auth = require('../../middleware/auth');

const routerUsers = express.Router();

routerUsers.post('/', auth, createSale);
routerUsers.get('/:id', auth, findSaleById);

module.exports = routerUsers;