const express = require('express');
const {
  findAllSellers,
  createUserByAdmin,
  findUsersByAdmin,
  deleteUserByAdmin } = require('../controllers/usersController');
const auth = require('../middleware/auth');

const routerUsers = express.Router();

routerUsers.get('/seller', findAllSellers);
routerUsers.delete('/admin/:id', auth, deleteUserByAdmin);
routerUsers.post('/admin', auth, createUserByAdmin);
routerUsers.get('/admin', auth, findUsersByAdmin);

module.exports = routerUsers;