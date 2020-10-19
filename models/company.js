'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Company.init({
    companyname: 
    {
      allowNull: false,
     type: DataTypes.STRING,
    },
    companyemail:
    {

      type: DataTypes.STRING,
      allowNull: false
    },
    city: 
    {
     type: DataTypes.STRING,
     allowNull: false
    },
    registrationnumber: 
    {
     type: DataTypes.INTEGER,
     allowNull: false
    },
    password: 
    {
     type: DataTypes.STRING,
     allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};