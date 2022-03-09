const login = require('../../services/login');
const { success } = require('../../utils/statusCode');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const getUserInfo = await login(email, password);

    return res.status(success).json(getUserInfo);
  } catch (error) {
    console.log(`ERROR LOGIN -> ${error.message}`);
    return next(error);
  }
};
