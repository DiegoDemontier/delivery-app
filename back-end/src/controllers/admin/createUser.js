const { created } = require('../../utils/statusCode');
const { createUser } = require('../../services/admin');

module.exports = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    console.log(req.user);
    const { role: adminRole } = req.user;

    const data = { name, email, password, role, adminRole };
    await createUser(data);
    
    return res.status(created).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(`ERROR CREATE USER -> ${error.message}`);
    return next(error);
  }
};