const service = require('../services/salesService');
const { success } = require('../utils/statusCode');

const findSaleById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id: userId, role } = req.user;

    const getSale = await service.findSaleById(id, userId, role);
    
    return res.status(success).json(getSale);
  } catch (error) {
    console.log(`ERROR FIND SALE BY ID -> ${error.message}`);
    return next(error);
  }
};

const findAllSales = async (req, res, next) => {
  try {
    const { id, role } = req.user;

    const getSales = await service.findAllSales(id, role);
    
    return res.status(success).json(getSales);
  } catch (error) {
    console.log(`ERROR FIND ALL SALES -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  findSaleById,
  findAllSales,
};