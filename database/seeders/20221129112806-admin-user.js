'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Users', [{
     name: 'John Doe',
     email: 'john@gmail.com',
     createdAt: new Date(),
     updatedAt: new Date(),
     },
     {
     name: 'Jack Sparow',
     email: 'jack@gmail.com',
     createdAt: new Date(),
     updatedAt: new Date(),
    },
    {
      name: 'James Bond',
      email: 'james@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('User', null, {});
     
  }
};
