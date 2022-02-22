const { users } = require('../../database/models');
const { badRequest } = require('../utils/statusCode');
const errorConstructor = require('../utils/errorHandling');

const { genToken } = require('./authService');

const login = async (email, password) => {
  const user = await users.findOne({ where: { email } });
  if (!user) throw errorConstructor(badRequest, 'Invalid username or password');
 
  if (password !== user.dataValues.password) {
    throw errorConstructor(badRequest, 'Invalid username or password');
  }

  const { password: _password, ...newData } = user.dataValues;

  const token = genToken(newData);

  return token;
};

module.exports = {
  login,
};