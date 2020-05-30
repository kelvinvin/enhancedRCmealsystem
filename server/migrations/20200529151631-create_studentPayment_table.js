'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("StudentPayment", {
      payment_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      amount: {
          type: Sequelize.DOUBLE,
      },
      paymentMade: {
          type: Sequelize.INTEGER,
          default: false
      },
      id: {
          type: Sequelize.INTEGER
      }
  })
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("StudentPayment")
  }
};
