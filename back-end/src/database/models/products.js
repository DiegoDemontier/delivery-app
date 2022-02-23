module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define(
    'products',
    {
      name: DataTypes.STRING(100),
      price: DataTypes.DECIMAL(4,2),
      url_image: DataTypes.STRING(200),
    },
    {
      timestamps: false,
    },
  );

  return products;
};
