const { users } = require('../../database/models');
const { Conflict, badRequest, Unauthorized } = require('../utils/statusCode');
const errorConstructor = require('../utils/errorHandling');
const md5 = require('../utils/md5');
const { userSchema, adminSchema } = require('../utils/schemas');

const createUser = async (data) => {
  const { name, email, password } = data;

  const { error } = userSchema.validate({ name, email, password });
  if (error) throw errorConstructor(badRequest, error.message);

  const emailExists = await users.findOne({ where: { email } });
  if (emailExists) throw errorConstructor(Conflict, 'User already registered');

  const newPassword = md5(password);
  const newData = { name, email, password: newPassword };

  await users.create(newData);

  return null;
};

const findAllSellers = async () => {
  const getSellers = await users.findAll({
    where: { role: 'seller' },
    attributes: { exclude: ['email', 'password', 'role'] },
  });
  
  return getSellers;
};

const createUserByAdmin = async (data) => {
  const { name, email, password, role, adminRole } = data;

  if (adminRole !== 'administrator') throw errorConstructor(Unauthorized, 'unauthorized user');

  const { error } = adminSchema.validate(data);
  if (error) throw errorConstructor(badRequest, error.message);

  const emailExists = await users.findOne({ where: { email } });
  if (emailExists) throw errorConstructor(Conflict, 'User already registered');

  const newPassword = md5(password);
  const newData = { name, email, password: newPassword, role };

  await users.create(newData);

  return null;
};

const findUsersByAdmin = async (adminRole) => {
  if (adminRole !== 'administrator') throw errorConstructor(Unauthorized, 'unauthorized user');

  const getUsers = await users.findAll({
    attributes: { exclude: 'password' },
  });
  
  return getUsers;
};

module.exports = {
  createUser,
  findAllSellers,
  createUserByAdmin,
  findUsersByAdmin,
};