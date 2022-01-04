'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('Books', {
    id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
    title: { type: Sequelize.STRING, allowNull: false },
    author: { type: Sequelize.STRING, allowNull: false },
    pageQuantity: { type: Sequelize.INTEGER, allowNull: true, field: 'page_quantity' },
    createdAt: { allowNull: false, type: Sequelize.DATE, field: 'created_at' },
    updatedAt: { allowNull: false, type: Sequelize.DATE, field: 'updated_at' },
  }),

  down: async (queryInterface) => queryInterface.dropTable('Books'),
};
