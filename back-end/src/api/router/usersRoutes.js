const express = require('express');
const { createUser } = require('../controllers/usersController');

const routerUsers = express.Router();

routerUsers.post('/', createUser);

module.exports = routerUsers;