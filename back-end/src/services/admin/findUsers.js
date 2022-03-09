const { users } = require('../../database/models');
const { Unauthorized } = require('../../utils/statusCode');
const errorConstructor = require('../../utils/errorHandling');

module.exports = async (adminRole) => {
  if (adminRole !== 'administrator') throw errorConstructor(Unauthorized, 'unauthorized user');

  const getUsers = await users.findAll({
    attributes: { exclude: 'password' },
  });
  
  return getUsers;
};