'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */



    return queryInterface.bulkInsert('Ordinateurs', [{
      nom: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    }], {});


  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ordinateurs', null, {});
  }
};
