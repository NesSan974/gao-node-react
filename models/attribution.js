'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attribution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      this.belongsTo(models.Ordinateur, {
        foreignKey: 'idOrdinateur'
      })

      this.belongsTo(models.Client, {
        foreignKey: 'idClient'
        
      })

    }
  };
  Attribution.init({
    idOrdinateur: DataTypes.INTEGER,
    idClient: DataTypes.INTEGER,
    horraire: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Attribution',
  });
  return Attribution;
};