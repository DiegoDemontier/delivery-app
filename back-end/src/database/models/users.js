module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );
  
  users.associate = (models) => {
    users.hasMany(models.sales, { foreignKey: 'userId', as: 'sales' });
    users.hasMany(models.sales, { foreignKey: 'sellerId', as: 'seller' });
  };

  return users;
};