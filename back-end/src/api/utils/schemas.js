const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const adminSchema = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().required(),
  adminRole: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const saleSchema = Joi.object({
  userId: Joi.number().integer().required(),
  sellerId: Joi.number().integer().required(),
  totalPrice: Joi.number().precision(2).required(),
  deliveryAddress: Joi.string().max(100).required(),
  deliveryNumber: Joi.string().max(50).required(),
  status: Joi.string().max(50),
  saleProduct: Joi.array().items(
    Joi.object({
      quantity: Joi.number().integer().required(),
      productId: Joi.number().integer().required(),
    }),
  ),
});

module.exports = {
  userSchema,
  loginSchema,
  saleSchema,
  adminSchema,
};