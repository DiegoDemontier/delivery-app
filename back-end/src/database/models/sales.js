module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define(
    'sales',
    {
      total_price: DataTypes.DECIMAL(9,2),
      delivery_address: DataTypes.STRING(100),
      delivery_number: DataTypes.STRING(50),
      status: DataTypes.STRING(50),
    },
    {
      createdAt: 'sale_date',
      updatedAt: false,
    },
  );

  sales.associate = (models) => {
    sales.belongsTo(models.users, { foreignKey: 'user_id', as: 'users' });
    sales.belongsTo(models.users, { foreignKey: 'seller_id', as: 'sellers' });
  };


  return sales;
};