'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.addColumn("Flats", "lng", Sequelize.FLOAT);
  await queryInterface.addColumn("Flats", "lat", Sequelize.FLOAT);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn("Flats",'lng');
   await queryInterface.removeColumn("Flats", "lat");

  }
};
