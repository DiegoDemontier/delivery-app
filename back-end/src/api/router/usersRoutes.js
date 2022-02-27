const express = require('express');
const { createUser, findAllSellers } = require('../controllers/usersController');

const routerUsers = express.Router();

routerUsers.post('/', createUser);
routerUsers.get('/', findAllSellers);

module.exports = routerUsers;