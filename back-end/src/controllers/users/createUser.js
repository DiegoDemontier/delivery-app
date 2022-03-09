const { created } = require('../../utils/statusCode');
const { createUser } = require('../../services/users');

module.exports = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const data = { name, email, password };
    await createUser(data);
    
    return res.status(created).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(`ERROR CREATE USER -> ${error.message}`);
    return next(error);
  }
};