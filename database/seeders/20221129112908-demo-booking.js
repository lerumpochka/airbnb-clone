'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bookings', [{
      UserId: 1,
      FlatId: 2,
      startDate: new Date('2022 December 3'),
      endDate: new Date('2022 December 5'),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 1,
      FlatId: 3,
      startDate: new Date('2022 December 10'),
      endDate: new Date('2022 December 15'),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 2,
      FlatId: 1,
      startDate: new Date('2022 December 20'),
      endDate: new Date('2022 December 26'),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  }}