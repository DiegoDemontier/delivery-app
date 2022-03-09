const express = require('express');
const {
  deleteUserByAdmin } = require('../controllers/usersController');
const auth = require('../middleware/auth');

const routerUsers = express.Router();

routerUsers.delete('/admin/:id', auth, deleteUserByAdmin);

module.exports = routerUsers;