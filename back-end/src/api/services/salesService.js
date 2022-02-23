const { sales } = require('../../database/models');
const { badRequest } = require('../utils/statusCode');
const errorConstructor = require('../utils/errorHandling');
const { saleSchema } = require('../utils/schemas');

const createSale = async (data) => {
  const { error } = saleSchema.validate(data);
  if (error) throw errorConstructor(badRequest, error.message);

  await sales.create(data);

  return null;
};

module.exports = {
  createSale,
};