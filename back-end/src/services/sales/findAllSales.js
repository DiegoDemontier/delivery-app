const { sales } = require('../../database/models');
const { notFound } = require('../../utils/statusCode');
const errorConstructor = require('../../utils/errorHandling');

module.exports = async (id, role) => {
  let where;

  if (role === 'customer') where = { userId: id };
  if (role === 'seller') where = { sellerId: id };

  const getSales = await sales.findAll({ 
    where,
  });
  
  if (!getSales) throw errorConstructor(notFound, 'user has no sales');
  return getSales;
};
