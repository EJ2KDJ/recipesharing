'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeRating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RecipeRating.belongsTo(models.User, {foreignKey: 'user_id'});
      RecipeRating.belongsTo(models.Recipe, {foreignKey: 'recipe_id'})
    }
  }
  RecipeRating.init({
    user_id: DataTypes.INTEGER,
    recipe_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RecipeRating',
  });
  return RecipeRating;
};