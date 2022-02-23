const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const saleSchema = Joi.object({
  user_id: Joi.number().integer().required(),
  seller_id: Joi.number().integer().required(),
  total_price: Joi.number().precision(2).required(),
  delivery_address: Joi.string().max(100).required(),
  delivery_number: Joi.string().max(50).required(),
  status: Joi.string().max(50).required(),
});

module.exports = {
  userSchema,
  loginSchema,
  saleSchema,
};