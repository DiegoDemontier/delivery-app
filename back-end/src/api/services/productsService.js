const { products } = require('../../database/models');

const findAllProducts = async () => {
  const getProducts = await products.findAll({});
  
  return getProducts;
};

module.exports = {
  findAllProducts,
};