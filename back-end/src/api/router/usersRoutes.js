const express = require('express');
const { createUser, findAllUsers } = require('../controllers/usersController');

const routerUsers = express.Router();

routerUsers.post('/', createUser);
routerUsers.get('/', findAllUsers);

module.exports = routerUsers;