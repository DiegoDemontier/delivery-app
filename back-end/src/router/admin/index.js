const express = require('express');
const { createUser, findUsers, deleteUser } = require('../../controllers/admin');
const auth = require('../../middleware/auth');

const adminRoutes = express.Router();

adminRoutes.post('/', auth, createUser);
adminRoutes.get('/', auth, findUsers);
adminRoutes.delete('/:id', auth, deleteUser);

module.exports = adminRoutes;