const { products } = require('../../database/models');

module.exports = async () => {
  const getProducts = await products.findAll({});
  
  return getProducts;
};
