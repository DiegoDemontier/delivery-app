const express = require('express');
const login = require('../../controllers/login');

const routerUsers = express.Router();

routerUsers.post('/', login);

module.exports = routerUsers;