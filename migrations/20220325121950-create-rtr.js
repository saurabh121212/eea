'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_of_business: {
        type: Sequelize.STRING(400)
      },
      address: {
        type: Sequelize.STRING(400)
      },
      tin: {
        type: Sequelize.STRING(200)
      },
      first_name: {
        type: Sequelize.STRING(200)
      },
      last_name: {
        type: Sequelize.STRING(200)
      },
      designation: {
        type: Sequelize.STRING(200)
      },
      telephone_number: {
        type: Sequelize.DOUBLE
      },
      cell_phone_number: {
        type: Sequelize.DOUBLE
      },
      email_id: {
        type: Sequelize.STRING(300)
      },
      password: {
        type: Sequelize.STRING(200)
      },
      otp: {
        type: Sequelize.STRING(45)
      },
      approval_status: {
        type: Sequelize.INTEGER
      },
      del_status: {
        type: Sequelize.INTEGER
      },
      user_type: {
        type: Sequelize.INTEGER
      },
      token: {
        type: Sequelize.STRING(200)
      },
      created_at: {
        type: Sequelize.DATE
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    }, {
      timestamps: false
    })
      .then(() => {
        queryInterface.bulkInsert("users", [
          {
            name_of_business: "EEA Admin",
            first_name: "EEA Admin",
            designation: "System Admin",
            cell_phone_number: "123456789",
            email_id: "eeaadmin",
            password: "$2b$10$c1b28Wf5S3suemCUovCuTenWNXojzNO0/UJ5x.qFfscrpXSsT0oKi",
            del_status: 1,
            user_type: 1,
            approval_status:1
          }
        ]);
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};