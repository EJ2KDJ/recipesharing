'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recipe.belongsTo(models.Recipe, {foreignKey: 'chef_id', as: 'chef'});
      Recipe.hasMany(models.RecipeRatings, {foreignKey: 'recipe_id'});
      Recipe.hasMany(models.RecipeLikes, {foreignKey: 'recipe_id'});
      Recipe.hasMany(models.RecipeComments, {foreignKey: 'recipe_id'});
      Recipe.belongsToMany(models.Labels, { through: models.RecipeLabels, foreignKey});
    }
  }
  Recipe.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    instructions: DataTypes.TEXT,
    image_url: DataTypes.STRING,
    chef_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};