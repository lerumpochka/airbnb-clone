'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.addColumn("lon", "lat", Sequelize.STRING);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('lon', 'lat')


  }
};
