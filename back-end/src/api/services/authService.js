const jwt = require('jsonwebtoken');

const API_SECRET = 'secret';

const genToken = (data) => jwt.sign({ ...data }, API_SECRET);

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
