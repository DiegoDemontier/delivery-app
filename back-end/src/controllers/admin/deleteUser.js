const { deleteUser } = require('../../services/admin');
const { success } = require('../../utils/statusCode');

module.exports = async (req, res, next) => {
  try {
    const { role: adminRole, id: adminId } = req.user;
    const { id } = req.params;

    await deleteUser(adminRole, adminId, id);
    
    return res.status(success).json({ message: 'deleted user' });
  } catch (error) {
    console.log(`ERROR DELETE USER -> ${error.message}`);
    return next(error);
  }
};
