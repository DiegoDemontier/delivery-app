const { findAllUsers } = require('../../services/admin');
const { success } = require('../../utils/statusCode');

module.exports = async (req, res, next) => {
  try {
    const { role: adminRole, id } = req.user;

    const users = await findAllUsers(adminRole, id);
    
    return res.status(success).json(users);
  } catch (error) {
    console.log(`ERROR FIND ALL USERS -> ${error.message}`);
    return next(error);
  }
};