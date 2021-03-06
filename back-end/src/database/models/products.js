module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define(
    'products',
    {
      name: DataTypes.STRING(100),
      price: DataTypes.DECIMAL(4,2),
      urlImage: DataTypes.STRING(200),
    },
    {
      underscored: true,
      timestamps: false,
    },
  );

  return products;
};
