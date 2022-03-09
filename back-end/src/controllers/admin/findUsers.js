const { findUsers } = require('../../services/admin');
const { success } = require('../../utils/statusCode');

module.exports = async (req, res, next) => {
  try {
    const { role: adminRole } = req.user;

    const users = await findUsers(adminRole);
    
    return res.status(success).json(users);
  } catch (error) {
    console.log(`ERROR FIND USERS -> ${error.message}`);
    return next(error);
  }
};