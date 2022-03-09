const { users } = require('../../database/models');
const { Unauthorized, notFound } = require('../utils/statusCode');
const errorConstructor = require('../utils/errorHandling');

const message = 'unauthorized user';

const deleteUserByAdmin = async (adminRole, id) => {
  if (adminRole !== 'administrator') throw errorConstructor(Unauthorized, message);

  const excluded = await users.destroy({ where: { id } });
  if (excluded === 0) throw errorConstructor(notFound, 'User not found');
  
  return null;
};

module.exports = {
  deleteUserByAdmin,
};