const { createSale } = require('../../services/sales');
const { created } = require('../../utils/statusCode');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.user;
    const data = { ...req.body, userId: id };
    const newSale = await createSale(data);
    
    return res.status(created).json(newSale);
  } catch (error) {
    console.log(`ERROR CREATE SALE -> ${error.message}`);
    return next(error);
  }
};