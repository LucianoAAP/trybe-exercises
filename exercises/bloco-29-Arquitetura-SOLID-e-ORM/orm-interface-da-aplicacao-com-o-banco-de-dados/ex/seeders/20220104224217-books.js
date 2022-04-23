'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books', [
    {
      title: 'Xablau',
      author: 'Gus',
      page_quantity: 237,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'serfgres',
      author: 'cat',
      page_quantity: 1,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  ]),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};
