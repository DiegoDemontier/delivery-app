const express = require('express');
const cors = require('cors');
const path = require('path');
const usersRoutes = require('./router/usersRoutes');
const loginRoutes = require('./router/loginRoutes');
const salesRoutes = require('./router/salesRoutes');
const errorMiddleware = require('./middleware/errorHandle');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/user', usersRoutes);
app.use('/login', loginRoutes);
app.use('/sale', salesRoutes);

app.use('/images', express.static(path.resolve(__dirname, '..', '..', 'public', 'images')));

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorMiddleware);

module.exports = app;
