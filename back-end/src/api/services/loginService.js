const { users } = require('../../database/models');
const { badRequest } = require('../utils/statusCode');
const errorConstructor = require('../utils/errorHandling');
const md5 = require('../utils/md5');

const { genToken } = require('./authService');

const login = async (email, password) => {
  const newPassword = md5(password);

  const user = await users.findOne({ where: { email } });
  
  if (!user || newPassword !== user.dataValues.password) {
    throw errorConstructor(badRequest, 'Invalid username or password');
  }

  const { password: _password, ...newData } = user.dataValues;

  const token = genToken(newData);

  return { token };
};

module.exports = {
  login,
};