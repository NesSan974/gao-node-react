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



    return queryInterface.bulkInsert('Attributions', [{
      idOrdinateur: Math.floor(Math.random() * 3) + 1,
      idClient: Math.floor(Math.random() * 3) + 1,
      Horraire: Math.floor( Math.random() * (19 - 8) + 8),
    }], {});


  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ordinateurs', null, {});
  }
};
