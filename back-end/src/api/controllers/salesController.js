const service = require('../services/salesService');
const { created } = require('../utils/statusCode');

const createSale = async (req, res, next) => {
  try {
    await service.createSale(req.body);
    
    return res.status(created).json({ message: 'successful sale' });
  } catch (error) {
    console.log(`ERROR CREATE SALE -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  createSale,
};