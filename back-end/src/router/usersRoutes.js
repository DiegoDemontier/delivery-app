const express = require('express');
const { createUser } = require('../controllers/users');
// const auth = require('../middleware/auth');

const routerUsers = express.Router();

routerUsers.post('/', createUser);
/* routerUsers.get('/seller', findAllSellers);
routerUsers.delete('/admin/:id', auth, deleteUserByAdmin);
routerUsers.post('/admin', auth, createUserByAdmin);
routerUsers.get('/admin', auth, findUsersByAdmin); */

module.exports = routerUsers;