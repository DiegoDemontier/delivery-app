const { sales } = require('../../database/models');
const { notFound } = require('../../utils/statusCode');
const errorConstructor = require('../../utils/errorHandling');

module.exports = async (id, userId, role) => {
  let where;

  if (role === 'customer') where = { id, userId };
  if (role === 'seller') where = { id, sellerId: userId };

  const getSale = await sales.findOne({ 
    where,
    attributes: ['totalPrice', 'status', 'sale_date'],
    include: [
      { association: 'user', attributes: ['name'] },
      { association: 'seller', attributes: ['name'] },
      {
        association: 'products',
        attributes: { exclude: 'urlImage' },
        through: { attributes: ['quantity'] },
      },
    ],
  });

  if (!getSale) throw errorConstructor(notFound, 'sale not found');
  return getSale;
};
