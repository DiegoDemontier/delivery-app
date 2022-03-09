const { users } = require('../../database/models');
const { Unauthorized, notFound } = require('../../utils/statusCode');
const errorConstructor = require('../../utils/errorHandling');

module.exports = async (adminRole, adminId, id) => {
  if (adminRole !== 'administrator') throw errorConstructor(Unauthorized, 'unauthorized user');
  if (Number(adminId) === Number(id)) throw errorConstructor(Unauthorized, 'deletion not allowed');

  const excluded = await users.destroy({ where: { id } });
  if (excluded === 0) throw errorConstructor(notFound, 'User not found');
  
  return null;
};
