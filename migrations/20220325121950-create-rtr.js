'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rtrs', {
      rtr_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      from_date: {
        type: Sequelize.DATE
      },
      to_date: {
        type: Sequelize.DATE
      },
      month_text: {
        type: Sequelize.STRING(50)
      },
      month_number: {
        type: Sequelize.INTEGER
      },
      current_year: {
        type: Sequelize.INTEGER
      },  
      company_name: {
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
        type: Sequelize.STRING(200)
      },
      cell_phone_number: {
        type: Sequelize.STRING(200)
      },
      email_id: {
        type: Sequelize.STRING(300)
      },
      created_at: {
        type: Sequelize.DATE
      },
      pmp_opening_stock: {
        type: Sequelize.DOUBLE
      },
      pmp_purchases: {
        type: Sequelize.DOUBLE
      },
      pmp_sales: {
        type: Sequelize.DOUBLE
      },
      pmp_rate: {
        type: Sequelize.DOUBLE
      },
      pmp_levy: {
        type: Sequelize.DOUBLE
      },
      pmp_closing_stock: {
        type: Sequelize.DOUBLE
      },
      mmp_opening_stock: {
        type: Sequelize.DOUBLE
      },
      mmp_purchases: {
        type: Sequelize.DOUBLE
      },
      mmp_sales: {
        type: Sequelize.DOUBLE
      },
      mmp_rate: {
        type: Sequelize.DOUBLE
      },
      mmp_levy: {
        type: Sequelize.DOUBLE
      },
      mmp_closing_stock: {
        type: Sequelize.DOUBLE
      },
      refuse_bags_opening_stock: {
        type: Sequelize.DOUBLE
      },
      refuse_bags_purchases: {
        type: Sequelize.DOUBLE
      },
      refuse_bags_sales: {
        type: Sequelize.DOUBLE
      },
      refuse_bags_rate: {
        type: Sequelize.DOUBLE
      },
      refuse_bags_levy: {
        type: Sequelize.DOUBLE
      },
      refuse_bags_closing_stock: {
        type: Sequelize.DOUBLE
      },
      total_levy_payable: {
        type: Sequelize.DOUBLE
      },
      admin_comments: {
        type: Sequelize.STRING(300)
      },
      approval_status: {
        type: Sequelize.INTEGER
      },
      del_status: {
        type: Sequelize.INTEGER
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rtrs');
  }
};