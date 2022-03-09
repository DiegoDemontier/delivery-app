const { users } = require('../../database/models');
const { Conflict, badRequest, Unauthorized } = require('../../utils/statusCode');
const errorConstructor = require('../../utils/errorHandling');
const md5 = require('../../utils/md5');
const { adminSchema } = require('../../utils/schemas');

module.exports = async (data) => {
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