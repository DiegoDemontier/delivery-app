const service = require('../services/usersService');
const { created, success } = require('../utils/statusCode');

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const data = { name, email, password };
    await service.createUser(data);
    
    return res.status(created).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(`ERROR CREATE USER -> ${error.message}`);
    return next(error);
  }
};

const findAllSellers = async (req, res, next) => {
  try {
    const getAllSellers = await service.findAllSellers();
    
    return res.status(success).json(getAllSellers);
  } catch (error) {
    console.log(`ERROR FIND ALL SELLERS -> ${error.message}`);
    return next(error);
  }
};

const createUserByAdmin = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const { role: adminRole } = req.user;

    const data = { name, email, password, role, adminRole };
    await service.createUserByAdmin(data);
    
    return res.status(created).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(`ERROR CREATE USER BY ADMIN -> ${error.message}`);
    return next(error);
  }
};

const findUsersByAdmin = async (req, res, next) => {
  try {
    const { role: adminRole } = req.user;

    const users = await service.findUsersByAdmin(adminRole);
    
    return res.status(created).json(users);
  } catch (error) {
    console.log(`ERROR FIND USERS BY ADMIN -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  createUser,
  findAllSellers,
  createUserByAdmin,
  findUsersByAdmin,
};