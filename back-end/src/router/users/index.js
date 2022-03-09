const express = require('express');
const { createUser, findAllSellers } = require('../../controllers/users');

const routerUsers = express.Router();

routerUsers.post('/', createUser);
routerUsers.get('/seller', findAllSellers);

module.exports = routerUsers;