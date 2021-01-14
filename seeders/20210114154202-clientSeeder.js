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

   return queryInterface.bulkInsert('Clients', [{
    nom: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    prenom: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Clients', null, {});

  }
};
