const express = require('express');
const usersRoutes = require('./router/usersRoutes');

const app = express();
app.use(express.json());

app.use('/user', usersRoutes);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
