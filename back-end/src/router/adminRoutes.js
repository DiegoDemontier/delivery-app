const express = require('express');
const { createUser } = require('../controllers/users');
// const auth = require('../middleware/auth');

const adminRoutes = express.Router();

adminRoutes.post('/', createUser);

module.exports = adminRoutes;