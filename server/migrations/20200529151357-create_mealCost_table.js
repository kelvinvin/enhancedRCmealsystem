'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("MealCost", {
      breakfastOrDinner: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      cost: {
          type: Sequelize.DOUBLE,
      }
  })
},

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable("MealCost")
  }
};
