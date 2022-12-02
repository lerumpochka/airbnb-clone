'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { 
     
      await queryInterface.bulkInsert(
        "Flats",
        [
          {
            type: "monolocale",
            location: "Roma",
            description: "comfortable and very nice",
            imgSrc: "",
            lng: 12.48,
            lat: 41.89,
            UserId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            type: "house",
            location: "Milano",
            description: "big one and very cool",
            imgSrc: "",
            lng: 9.18,
            lat: 45.46,
            UserId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            type: "villa",
            location: "Napoli",
            description: "with a pool",
            imgSrc: "",
            lng: 14.24,
            lat: 40.83,
            UserId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
     
   }}