'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { 
     
      await queryInterface.bulkInsert('Flats', [{
        
          type: "monolocale",
          location: 'Roma',
          description: 'comfortable and very nice',
          imgScr: '',
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
       },
       {
          type: "house",
           location: 'Milano',
           description: 'big one and very cool',
           imgScr: '',
           UserId: 2,
           createdAt: new Date(),
           updatedAt: new Date(),
        },
        {
          type: "villa",
           location: 'Napoli',
           description: 'with a pool',
           imgScr: '',
           UserId: 3,
           createdAt: new Date(),
           updatedAt: new Date(),
        }], {});
     
   }}