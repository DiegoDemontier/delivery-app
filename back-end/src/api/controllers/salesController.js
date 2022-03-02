const service = require('../services/salesService');
const { created } = require('../utils/statusCode');

const createSale = async (req, res, next) => {
  try {
    const { id } = req.user;
    const data = { ...req.body, userId: id };
    const newSale = await service.createSale(data);
    
    return res.status(created).json(newSale);
  } catch (error) {
    console.log(`ERROR CREATE SALE -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  createSale,
};