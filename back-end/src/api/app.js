const express = require('express');
const usersRoutes = require('./router/usersRoutes');
const loginRoutes = require('./router/loginRoutes');
const errorMiddleware = require('./middleware/errorHandle');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/user', usersRoutes);
app.use('/login', loginRoutes);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorMiddleware);

module.exports = app;
