const { findAllSales } = require('../../services/sales');
const { success } = require('../../utils/statusCode');

module.exports = async (req, res, next) => {
  try {
    const { id, role } = req.user;

    const getSales = await findAllSales(id, role);
    
    return res.status(success).json(getSales);
  } catch (error) {
    console.log(`ERROR FIND ALL SALES -> ${error.message}`);
    return next(error);
  }
};
