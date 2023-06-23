'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_id:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER
    },

    name_of_business: DataTypes.STRING(400),
    address: DataTypes.STRING(400),
    tin: DataTypes.STRING(200),
    first_name: DataTypes.STRING(200),
    last_name: DataTypes.STRING(200),
    designation: DataTypes.STRING(200),
    telephone_number: DataTypes.DOUBLE,
    cell_phone_number: DataTypes.DOUBLE,
    email_id: DataTypes.STRING(300),
    password: DataTypes.STRING(200),
    otp: DataTypes.STRING(45),
    approval_status: DataTypes.INTEGER,
    del_status: DataTypes.INTEGER,
    user_type: DataTypes.INTEGER,
    token: DataTypes.STRING(200),
    created_at: DataTypes.DATE,

  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};