const service = require('../services/usersService');
const { success } = require('../utils/statusCode');

const findUsersByAdmin = async (req, res, next) => {
  try {
    const { role: adminRole } = req.user;

    const users = await service.findUsersByAdmin(adminRole);
    
    return res.status(success).json(users);
  } catch (error) {
    console.log(`ERROR FIND USERS BY ADMIN -> ${error.message}`);
    return next(error);
  }
};

const deleteUserByAdmin = async (req, res, next) => {
  try {
    const { role: adminRole } = req.user;
    const { id } = req.params;

    await service.deleteUserByAdmin(adminRole, id);
    
    return res.status(success).json({ message: 'deleted user' });
  } catch (error) {
    console.log(`ERROR FIND USERS BY ADMIN -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  findUsersByAdmin,
  deleteUserByAdmin,
};