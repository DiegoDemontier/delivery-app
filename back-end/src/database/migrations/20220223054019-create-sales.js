'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(9,2)
      },
      deliveryAddress: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      status: {
        allowNull: false,
        defaultValue: 'Pendente',
        type: Sequelize.STRING(50)
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};