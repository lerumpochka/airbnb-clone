'use strict';
const { Model, DataTypes } = require('sequelize');
import connection from '../connection';
const initFlat = (sequelize, DataTypes) => {
  class Flat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      Flat.belongsToMany(models.User, { through: models.Booking })
    }
  }
  Flat.init({

    type: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgSrc: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    lng: DataTypes.FLOAT,
    lat:DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Flat',
  });
  return Flat;
};
export default initFlat(connection, DataTypes);














