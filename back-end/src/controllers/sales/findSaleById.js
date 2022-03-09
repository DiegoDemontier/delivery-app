const { findSaleById } = require('../../services/sales');
const { success } = require('../../utils/statusCode');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id: userId, role } = req.user;

    const getSale = await findSaleById(id, userId, role);
    
    return res.status(success).json(getSale);
  } catch (error) {
    console.log(`ERROR FIND SALE BY ID -> ${error.message}`);
    return next(error);
  }
};