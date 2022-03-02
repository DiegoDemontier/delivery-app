const service = require('../services/productsService');
const { success } = require('../utils/statusCode');

const findAllProducts = async (req, res, next) => {
  try {
    const getAllproducts = await service.findAllProducts();
    
    return res.status(success).json(getAllproducts);
  } catch (error) {
    console.log(`ERROR FIND ALL PRODUCTS -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  findAllProducts,
};