'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flat.init({
    Name: DataTypes.STRING,
    type: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgScrr: DataTypes.STRING,
    UserId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Flat',
  });
  return Flat;
};