const express = require('express');
const { createUser, findAllUser } = require('../controllers/usersController');

const routerUsers = express.Router();

routerUsers.post('/', createUser);
routerUsers.get('/', findAllUser);

module.exports = routerUsers;