const service = require('../services/usersService');
const { created, success } = require('../utils/statusCode');

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

const findAllUsers = async (req, res, next) => {
  try {
    const getAllUsers = await service.findAllUsers();
    
    return res.status(success).json(getAllUsers);
  } catch (error) {
    console.log(`ERROR FIND ALL USERS -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  createUser,
  findAllUsers,
};