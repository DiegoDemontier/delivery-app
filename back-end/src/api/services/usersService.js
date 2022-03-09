const { users } = require('../../database/models');
const { Conflict, badRequest, Unauthorized, notFound } = require('../utils/statusCode');
const errorConstructor = require('../utils/errorHandling');
const md5 = require('../utils/md5');
const { adminSchema } = require('../utils/schemas');

const message = 'unauthorized user';

const findAllSellers = async () => {
  const getSellers = await users.findAll({
    where: { role: 'seller' },
    attributes: { exclude: ['email', 'password', 'role'] },
  });
  
  return getSellers;
};

const createUserByAdmin = async (data) => {
  const { name, email, password, role, adminRole } = data;

  if (adminRole !== 'administrator') throw errorConstructor(Unauthorized, message);

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
  if (adminRole !== 'administrator') throw errorConstructor(Unauthorized, message);

  const getUsers = await users.findAll({
    attributes: { exclude: 'password' },
  });
  
  return getUsers;
};

const deleteUserByAdmin = async (adminRole, id) => {
  if (adminRole !== 'administrator') throw errorConstructor(Unauthorized, message);

  const excluded = await users.destroy({ where: { id } });
  if (excluded === 0) throw errorConstructor(notFound, 'User not found');
  
  return null;
};

module.exports = {
  findAllSellers,
  createUserByAdmin,
  findUsersByAdmin,
  deleteUserByAdmin,
};