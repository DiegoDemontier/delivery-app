module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define(
    'products',
    {
      underscored: true,
      name: DataTypes.STRING(100),
      price: DataTypes.DECIMAL(4,2),
      urlImage: DataTypes.STRING(200),
    },
    {
      timestamps: false,
    },
  );

  return products;
};
