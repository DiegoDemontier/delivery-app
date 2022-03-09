const express = require('express');
const { createUser, findAllUsers, deleteUser } = require('../../controllers/admin');
const auth = require('../../middleware/auth');

const adminRoutes = express.Router();

adminRoutes.post('/', auth, createUser);
adminRoutes.get('/', auth, findAllUsers);
adminRoutes.delete('/:id', auth, deleteUser);

module.exports = adminRoutes;