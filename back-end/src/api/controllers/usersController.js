const service = require('../services/usersService');
// const { created, success, noContent } = require('../utils/statusCode');

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const role = 'user';
    
    const data = { name, email, password, role };
    const token = await service.createUser(data);
    
    return res.status(201).json(token);
  } catch (error) {
    console.log(`ERROR CREATE USER -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  createUser,
};