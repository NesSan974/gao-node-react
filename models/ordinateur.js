'use strict';
const db = require("../models");

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ordinateur extends Model {
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

  Ordinateur.init({
    nom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ordinateur',
  });
  return Ordinateur;
};