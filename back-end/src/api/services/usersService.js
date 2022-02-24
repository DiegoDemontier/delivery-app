const { users } = require('../../database/models');
const { Conflict, badRequest } = require('../utils/statusCode');
const errorConstructor = require('../utils/errorHandling');
const md5 = require('../utils/md5');
const { userSchema } = require('../utils/schemas');

const createUser = async (data) => {
  const { name, email, password } = data;
  const newData = data;
  const { error } = userSchema.validate({ name, email, password });
  if (error) throw errorConstructor(badRequest, error.message);

  const emailExists = await users.findOne({ where: { email: data.email } });
  if (emailExists) throw errorConstructor(Conflict, 'User already registered');
  
  newData.password = md5(data.password);
  await users.create(newData);

  return null;
};

const findAllUser = async () => {
  const getUsers = await users.findAll({});
  
  return getUsers;
};

module.exports = {
  createUser,
  findAllUser,
};