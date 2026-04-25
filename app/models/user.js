'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Recipe, {foreignKey: 'chef_id'});
      User.hasMany(models.RecipeComment, {foreignKey: 'user_id'});
      User.hasMany(models.RecipeRating, {foreignKey: 'user_id'});
      User.hasMany(models.RecipeLike, {foreignKey: 'user_id'});
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};