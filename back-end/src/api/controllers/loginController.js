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

/* const login = async (req, res, next) => {
  try {
  const { email, password } = req.body;
  validateLogin(email, password);
  
  const userExists = await User.findOne({ where: { email } });
  // console.log('-----------------User exists', userExists);
  validateUserExists(userExists, password);
  
  const { id, displayName } = userExists;
  
  const token = genToken({ email, displayName, id });
  
  const newToken = { token };
  
  res.status(200).json(newToken);
  } catch (error) {
  console.error('controler erro: ', error);
  return next(error);
  }
  }; */ 