const { users } = require('../../database/models');
const { Conflict } = require('../utils/statusCode');
const errorConstructor = require('../utils/errorHandling');

const createUser = async (data) => {
 const emailExists = await users.findOne({ where: { email: data.email } });
 if (emailExists) throw errorConstructor(Conflict, 'User already registered');

  await users.create(data);

  return null;
};

module.exports = {
  createUser,
};