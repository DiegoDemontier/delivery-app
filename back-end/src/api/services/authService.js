const jwt = require('jsonwebtoken');

const API_SECRET = 'secret_key';
const JWT_CONFIG = {
  expiresIn: '1d',
  algorithm: 'HS256',
  }; 

const genToken = (data) => jwt.sign({ ...data }, API_SECRET, JWT_CONFIG);

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, API_SECRET);

    return decoded;
  } catch (error) {
    console.log(`VERIFY TOKEN -> ${error.message}`);
    return null;
  }
};

module.exports = {
  genToken,
  verifyToken,
};
