const { users } = require('../../database/models');
const { badRequest, notFound } = require('../utils/statusCode');
const { loginSchema } = require('../utils/schemas');
const errorConstructor = require('../utils/errorHandling');
const md5 = require('../utils/md5');

const { genToken } = require('./authService');

const login = async (email, password) => {
  const { error } = loginSchema.validate({ email, password });
  if (error) throw errorConstructor(badRequest, error.message);
  
  const getUser = await users.findOne({ where: { email } });
  const newPassword = md5(password);
  
  if (!getUser || newPassword !== getUser.dataValues.password) {
    throw errorConstructor(notFound, 'Invalid username or password');
  }
  
  const { id, name, role } = getUser.dataValues;
  const token = genToken({ id, name, email, role });
  const data = {
    name,
    email,
    role,
    token,
  };

  return data;
};

module.exports = {
  login,
};