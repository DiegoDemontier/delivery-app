const service = require('../services/usersService');
const { created } = require('../utils/statusCode');

const createUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const data = { name, email, password, role };
    await service.createUser(data);
    
    return res.status(created).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(`ERROR CREATE USER -> ${error.message}`);
    return next(error);
  }
};

const findAllUser = async (req, res, next) => {
  try {
    const users = await service.findAllUser();
    
    return res.status(created).json(users);
  } catch (error) {
    console.log(`ERROR CREATE USER -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  createUser,
  findAllUser,
};