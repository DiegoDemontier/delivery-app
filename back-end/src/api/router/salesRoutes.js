const express = require('express');
const { createSale } = require('../controllers/salesController');
const auth = require('../middleware/auth');

const routerUsers = express.Router();

routerUsers.post('/', auth, createSale);

module.exports = routerUsers;