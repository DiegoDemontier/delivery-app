const { sales, products, salesProducts } = require('../../database/models');
const { badRequest } = require('../utils/statusCode');
const errorConstructor = require('../utils/errorHandling');
const { saleSchema } = require('../utils/schemas');

const createSale = async (data) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleProduct } = data;
  
  const { error } = saleSchema.validate(data);
  if (error) throw errorConstructor(badRequest, error.message);
  
  const arrayProductId = saleProduct.map(({ productId }) => productId);
  const product = await products.findAll({ where: { id: arrayProductId } });

  const sale = await sales.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber });
  await sale.addProducts(product);
  
  saleProduct.forEach(async ({ productId, quantity }) => {
    await salesProducts.update({ quantity }, { where: { productId, saleId: 1 } });
  });

  return null;
};

module.exports = {
  createSale,
};