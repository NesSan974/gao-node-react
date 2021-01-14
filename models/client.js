'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      this.hasMany(models.Attribution, {
        foreignKey: 'idOrdinateur'
      })
    }
    
  };
  Client.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};