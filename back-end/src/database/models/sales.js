module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define(
    'sales',
    {
      underscored: true,
      totalPrice: DataTypes.DECIMAL(9,2),
      deliveryAddress: DataTypes.STRING(100),
      deliveryNumber: DataTypes.STRING(50),
      status: DataTypes.STRING(50),
    },
    {
      createdAt: 'saleDate',
      updatedAt: false,
    },
  );

  sales.associate = (models) => {
    sales.belongsTo(models.users, { foreignKey: 'user_id', as: 'users' });
    sales.belongsTo(models.users, { foreignKey: 'seller_id', as: 'sellers' });
  };


  return sales;
};