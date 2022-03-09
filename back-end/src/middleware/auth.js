const auth = require('../services/auth');
const { Unauthorized } = require('../utils/statusCode');

const message = {
  invalid: 'Expired or invalid token',
  Unauthorized: 'Token not found',
};

module.exports = (req, res, next) => {
 try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(Unauthorized).json({ message: message.Unauthorized });
   
    const decoded = auth.verifyToken(authorization);
    
    if (!decoded) return res.status(Unauthorized).json({ message: message.invalid });

    req.user = decoded;

    next();
 } catch (error) {
    console.log(`MIDDLEWARE AUTH -> ${error.message}`);
    return next(error);
 }
};
