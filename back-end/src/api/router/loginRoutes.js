const express = require('express');
const { login } = require('../controllers/loginController');

const routerUsers = express.Router();

routerUsers.post('/', login);

module.exports = routerUsers;