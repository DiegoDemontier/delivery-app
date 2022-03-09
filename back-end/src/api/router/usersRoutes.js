const express = require('express');
const { createUser,
  findAllSellers,
  createUserByAdmin,
  findUsersByAdmin } = require('../controllers/usersController');
const auth = require('../middleware/auth');

const routerUsers = express.Router();

routerUsers.post('/', createUser);
routerUsers.get('/seller', findAllSellers);
routerUsers.post('/admin', auth, createUserByAdmin);
routerUsers.get('/admin', auth, findUsersByAdmin);

module.exports = routerUsers;