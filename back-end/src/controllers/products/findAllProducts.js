const { findAllProducts } = require('../../services/products');
const { success } = require('../../utils/statusCode');

module.exports = async (req, res, next) => {
  try {
    const getAllproducts = await findAllProducts();
    
    return res.status(success).json(getAllproducts);
  } catch (error) {
    console.log(`ERROR FIND ALL PRODUCTS -> ${error.message}`);
    return next(error);
  }
};
