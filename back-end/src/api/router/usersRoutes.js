const express = require('express');
const {
  findUsersByAdmin,
  deleteUserByAdmin } = require('../controllers/usersController');
const auth = require('../middleware/auth');

const routerUsers = express.Router();

routerUsers.delete('/admin/:id', auth, deleteUserByAdmin);
routerUsers.get('/admin', auth, findUsersByAdmin);

module.exports = routerUsers;