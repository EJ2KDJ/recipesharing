'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RecipeComment.belongsTo(models.User, {foreignKey: 'user_id'});
      RecipeComment.belongsTo(models.Recipe, {foreignKey: 'recipe_id'});
    }
  }
  RecipeComment.init({
    user_id: DataTypes.INTEGER,
    recipe_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'RecipeComment',
  });
  return RecipeComment;
};