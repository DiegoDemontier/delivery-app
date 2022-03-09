const service = require('../services/usersService');
const { success } = require('../utils/statusCode');

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
  deleteUserByAdmin,
};