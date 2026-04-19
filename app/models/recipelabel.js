'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeLabel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RecipeLabel.init({
    recipe_id: DataTypes.INTEGER,
    label_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RecipeLabel',
  });
  return RecipeLabel;
};