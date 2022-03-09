const { users } = require('../../database/models');

module.exports = async () => {
  const getSellers = await users.findAll({
    where: { role: 'seller' },
    attributes: { exclude: ['email', 'password', 'role'] },
  });
  
  return getSellers;
};