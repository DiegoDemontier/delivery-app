const salesProducts = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define(
    'salesProducts',
    {
      quantity: DataTypes.INTEGER,
    },
    { timestamps: false },
  );

  saleProduct.associate = (models) => {
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: saleProduct,
      foreignKey: 'sale_id',
    });
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: saleProduct,
      foreignKey: 'product_id',
    });
  };

  return saleProduct;
};

module.exports = salesProducts;