const service = require('../services/loginService');
const { success } = require('../utils/statusCode');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await service.login(email, password);

    return res.status(success).json(user);
  } catch (error) {
    console.log(`ERROR LOGIN -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  login,
};