const { users } = require('../../database/models');
const { Conflict, badRequest } = require('../../utils/statusCode');
const errorConstructor = require('../../utils/errorHandling');
const md5 = require('../../utils/md5');
const { userSchema } = require('../../utils/schemas');

module.exports = async (data) => {
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