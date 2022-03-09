const express = require('express');
const { createUser, findUsers } = require('../controllers/admin');
const auth = require('../middleware/auth');

const adminRoutes = express.Router();

adminRoutes.post('/', auth, createUser);
adminRoutes.get('/', auth, findUsers);

module.exports = adminRoutes;