const express = require('express');
const { salesRoutes } = require('../controllers/salesController');

const routerUsers = express.Router();

routerUsers.post('/', salesRoutes);

module.exports = routerUsers;