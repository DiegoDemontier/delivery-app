module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define(
    'sales',
    {
      totalPrice: DataTypes.DECIMAL(9,2),
      deliveryAddress: DataTypes.STRING(100),
      deliveryNumber: DataTypes.STRING(50),
      status: DataTypes.STRING(50),
    },
    {
      underscored: true,
      createdAt: 'sale_date',
      updatedAt: false,
    },
  );

  sales.associate = (models) => {
    sales.belongsTo(models.users, { foreignKey: 'userId', as: 'users' });
    sales.belongsTo(models.users, { foreignKey: 'sellerId', as: 'sellers' });
  };


  return sales;
};