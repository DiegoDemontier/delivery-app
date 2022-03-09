const { Op } = require('sequelize');
const { users } = require('../../database/models');
const { Unauthorized } = require('../../utils/statusCode');
const errorConstructor = require('../../utils/errorHandling');

module.exports = async (adminRole, id) => {
  if (adminRole !== 'administrator') throw errorConstructor(Unauthorized, 'unauthorized user');

  const getUsers = await users.findAll({
    where: { id: { [Op.ne]: id } },
    attributes: { exclude: 'password' },
  });
  
  return getUsers;
};