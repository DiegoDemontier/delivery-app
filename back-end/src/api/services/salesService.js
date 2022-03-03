const { Op } = require('sequelize');

const { sales, products, salesProducts } = require('../../database/models');
const { badRequest, notFound } = require('../utils/statusCode');
const errorConstructor = require('../utils/errorHandling');
const { saleSchema } = require('../utils/schemas');

const createSale = async (data) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleProduct } = data;
  
  const { error } = saleSchema.validate(data);
  if (error) throw errorConstructor(badRequest, error.message);
  
  const arrayProductId = saleProduct.map(({ productId }) => productId);
  const getProducts = await products.findAll({ where: { id: arrayProductId } });

  const newSale = await sales.create({
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber });
    
  await newSale.addProducts(getProducts);
  const { dataValues: { id: saleId } } = newSale;

  saleProduct.forEach(async ({ productId, quantity }) => {
    await salesProducts.update({ quantity }, { where: { [Op.and]: [{ productId }, { saleId }] } });
  });

  return newSale.dataValues;
};

const findSaleById = async (id, userId) => {
  const getSale = await sales.findOne({ 
    where: { id, userId },
    attributes: ['totalPrice', 'status', 'sale_date'],
    include: [
      { association: 'seller', attributes: ['name'] },
      {
        association: 'products',
        attributes: ['name', 'price'],
        through: { attributes: ['quantity'] },
      },
    ],
  });

  if (!getSale) throw errorConstructor(notFound, 'sale not found');
  return getSale;
};

module.exports = {
  createSale,
  findSaleById,
};