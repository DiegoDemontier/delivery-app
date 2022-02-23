const sales = (sequelize, DataTypes) => {
  const sale = sequelize.define(
    'sales',
    {
      total_price: DataTypes.DECIMAL(9,2),
      delivery_address: DataTypes.STRING(100),
      delivery_number: DataTypes.STRING(50),
      status: DataTypes.STRING(50),
    },
    {
      createdAt: 'sale_date',
      updatedAt: null,
    },
  );

  sale.associate = (models) => {
    sale.belongsTo(models.users, { foreignKey: 'user_id', as: 'user' });
  };

  sale.associate = (models) => {
    sale.belongsTo(models.users, { foreignKey: 'seller_id', as: 'seller' });
  };

  return sale;
};

module.exports = sales;