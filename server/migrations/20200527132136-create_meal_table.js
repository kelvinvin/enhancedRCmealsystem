'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Meal", {
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    PDFUrl: {
        type: Sequelize.STRING,
        allowNull: false
    }
  })
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable("Meal")
  }
};
