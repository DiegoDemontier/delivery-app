const { sales, products, salesProducts } = require('../../database/models');
const { badRequest } = require('../../utils/statusCode');
const errorConstructor = require('../../utils/errorHandling');
const { saleSchema } = require('../../utils/schemas');

module.exports = async (data) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleProduct } = data;

  const { error } = saleSchema.validate(data);
  if (error) throw errorConstructor(badRequest, error.message);

  const newSale = await sales.create({
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber });
  
  const arrayProductId = saleProduct.map(({ productId }) => productId);
  const getProducts = await products.findAll({ where: { id: arrayProductId } });

  const checkProducts = arrayProductId.length === getProducts.length;
  if (!checkProducts) throw errorConstructor(badRequest, 'product not found');

  saleProduct.forEach(async ({ productId, quantity }) => {
    await salesProducts.create({
      saleId: newSale.id,
      productId,
      quantity,
    });
  });
    
  return newSale.dataValues;
};