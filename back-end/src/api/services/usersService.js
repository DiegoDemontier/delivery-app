const { users } = require('../../database/models');
const { Conflict, badRequest } = require('../utils/statusCode');
const errorConstructor = require('../utils/errorHandling');
const { userSchema } = require('../utils/schemas');

const createUser = async (data) => {
  const { error } = userSchema.validate(data);
  if (error) throw errorConstructor(badRequest, error.message);

  const emailExists = await users.findOne({ where: { email: data.email } });
  if (emailExists) throw errorConstructor(Conflict, 'User already registered');

  await users.create(data);

  return null;
};

module.exports = {
  createUser,
};