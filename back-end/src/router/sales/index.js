const express = require('express');
const { createSale } = require('../../controllers/sales');
const auth = require('../../middleware/auth');

const routerUsers = express.Router();

routerUsers.post('/', auth, createSale);

module.exports = routerUsers;