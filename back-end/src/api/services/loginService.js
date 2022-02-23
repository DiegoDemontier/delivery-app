const { users } = require('../../database/models');
const { badRequest, notFound } = require('../utils/statusCode');
const { loginSchema } = require('../utils/schemas');
const errorConstructor = require('../utils/errorHandling');
const md5 = require('../utils/md5');

const { genToken } = require('./authService');

const login = async (email, password) => {
  const { error } = loginSchema.validate({ email, password });
  const user = await users.findOne({ where: { email } });
  const newPassword = md5(password);
  
  if (error) throw errorConstructor(badRequest, error.message);
  if (!user || newPassword !== user.dataValues.password) {
    throw errorConstructor(notFound, 'Invalid username or password');
  }

  const { id: _id, password: _password, ...data } = user.dataValues;
  
  const token = genToken(data);

  return { ...data, token };
};

module.exports = {
  login,
};