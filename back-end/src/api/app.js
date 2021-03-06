const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

require('../sockets/status')(io);

const usersRoutes = require('../router/users');
const adminRoutes = require('../router/admin');
const loginRoutes = require('../router/login');
const productsRoutes = require('../router/products');
const salesRoutes = require('../router/sales');
const errorMiddleware = require('../middleware/errorHandle');

app.use(express.json());
app.use(cors());

app.use('/user', usersRoutes);
app.use('/login', loginRoutes);
app.use('/sale', salesRoutes);
app.use('/product', productsRoutes);
app.use('/admin', adminRoutes);

app.use('/images', express.static(path.resolve(__dirname, '..', '..', 'public', 'images')));

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorMiddleware);

module.exports = http;
