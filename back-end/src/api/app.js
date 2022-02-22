const express = require('express');
const usersRoutes = require('./router/usersRoutes');
const errorMiddleware = require('./middleware/errorHandle');

const app = express();
app.use(express.json());

app.use('/user', usersRoutes);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorMiddleware);

module.exports = app;
