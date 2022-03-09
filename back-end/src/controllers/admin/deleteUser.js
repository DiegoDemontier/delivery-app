const { deleteUser } = require('../../services/admin');
const { success } = require('../../utils/statusCode');

module.exports = async (req, res, next) => {
  try {
    const { role: adminRole } = req.user;
    const { id } = req.params;

    await deleteUser(adminRole, id);
    
    return res.status(success).json({ message: 'deleted user' });
  } catch (error) {
    console.log(`DELETE USER -> ${error.message}`);
    return next(error);
  }
};
