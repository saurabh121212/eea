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
    rtr_id:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER
    },

    from_date: DataTypes.STRING(400),
    to_date: DataTypes.STRING(400),
    tin: DataTypes.STRING(200),
    company_name: DataTypes.STRING(200),
    tin_number: DataTypes.STRING(200),
    telephone_number: DataTypes.DOUBLE,
    cell_phone_number: DataTypes.DOUBLE,
    email_id: DataTypes.STRING(300),
    first_name: DataTypes.STRING(200),
    last_name: DataTypes.STRING(200),
    designation: DataTypes.STRING(200),
    created_at: DataTypes.DATE,

    pmp_opening_stock: DataTypes.DOUBLE,
    pmp_purchases: DataTypes.DOUBLE,
    pmp_sales: DataTypes.DOUBLE,
    pmp_rate: DataTypes.DOUBLE,
    pmp_levy: DataTypes.DOUBLE,
    pmp_closing_stock: DataTypes.DOUBLE,

    mmp_opening_stock: DataTypes.DOUBLE,
    mmp_purchases: DataTypes.DOUBLE,
    mmp_sales: DataTypes.DOUBLE,
    mmp_rate: DataTypes.DOUBLE,
    mmp_levy: DataTypes.DOUBLE,
    mmp_closing_stock: DataTypes.DOUBLE,

    refuse_bags_opening_stock: DataTypes.DOUBLE,
    refuse_bags_pmp_purchases: DataTypes.DOUBLE,
    refuse_bags_pmp_sales: DataTypes.DOUBLE,
    refuse_bags_pmp_rate: DataTypes.DOUBLE,
    refuse_bags_pmp_levy: DataTypes.DOUBLE,
    refuse_bags_pmp_closing_stock: DataTypes.DOUBLE,
    admin_comments: DataTypes.STRING(600),
    approval_status: DataTypes.INTEGER,
    del_status: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};