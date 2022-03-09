const { findAllSellers } = require('../../services/users');
const { success } = require('../../utils/statusCode');

module.exports = async (req, res, next) => {
  try {
    const getAllSellers = await findAllSellers();
    
    return res.status(success).json(getAllSellers);
  } catch (error) {
    console.log(`ERROR FIND ALL SELLERS -> ${error.message}`);
    return next(error);
  }
};