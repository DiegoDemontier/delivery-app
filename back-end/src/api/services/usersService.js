const { users } = require('../../database/models');
const { Conflict, badRequest } = require('../utils/statusCode');
const errorConstructor = require('../utils/errorHandling');
const md5 = require('../utils/md5');
const { userSchema } = require('../utils/schemas');

const createUser = async (data) => {
  const { error } = userSchema.validate(data);
  if (error) throw errorConstructor(badRequest, error.message);

  const emailExists = await users.findOne({ where: { email: data.email } });
  if (emailExists) throw errorConstructor(Conflict, 'User already registered');

  const { name, email, password, role } = data;

  const newPassword = md5(password);
  const newData = { name, email, password: newPassword, role };

  await users.create(newData);

  return null;
};

module.exports = {
  createUser,
};