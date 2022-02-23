module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define(
    'salesProducts',
    {
      quantity: DataTypes.INTEGER,
    },
    { timestamps: false },
  );

  salesProducts.associate = (models) => {
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: salesProducts,
      foreignKey: 'sale_id',
    });
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: salesProducts,
      foreignKey: 'product_id',
    });
  };

  return salesProducts;
};