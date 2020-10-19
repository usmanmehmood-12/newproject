'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      //  type: Sequelize.UUID,
     //   defaultValue:Sequelize.UUIDV4
        type:Sequelize.INTEGER

      },
      companyname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      companyemail: {
        allowNull: false,
        required:true,
        isEmail:true,
        type: Sequelize.STRING

      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      registrationnumber: {
        allowNull: false,
       // required:true,
        type: Sequelize.INTEGER
      },
      password: {
        allowNull: false,
        len:[8,20],
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Companies');
  }
};