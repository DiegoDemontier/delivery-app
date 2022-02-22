const service = require('../services/usersService');
// const { created, success, noContent } = require('../utils/statusCode');

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const role = 'user';

    const data = { name, email, password, role };
    await service.createUser(data);
    
    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(`ERROR CREATE USER -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  createUser,
};