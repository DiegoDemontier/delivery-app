const express = require('express');
const { createSale } = require('../controllers/salesController');

const routerUsers = express.Router();

routerUsers.post('/', createSale);

module.exports = routerUsers;