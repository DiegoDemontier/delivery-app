const service = require('../services/loginService');
const { success } = require('../utils/statusCode');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const token = await service.login(email, password);
    
    return res.status(success).json(token);
  } catch (error) {
    console.log(`ERROR CREATE USER -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  login,
};