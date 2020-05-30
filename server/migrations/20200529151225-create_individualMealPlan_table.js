'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("IndividualMealPlan", {
      individualMealPlan_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      date: {
          type: Sequelize.DATEONLY,
          allowNull: false
      },
      mealComp1: {
          type: Sequelize.STRING
      },
      mealComp2: {
          type: Sequelize.STRING
      },
      mealComp3: {
          type: Sequelize.STRING
      },
      mealComp4: {
          type: Sequelize.STRING
      },
      mealComp5: {
          type: Sequelize.STRING
      },
      cuisineType: {
          type: Sequelize.STRING
      },
      breakfastOrDinner: {
          type: Sequelize.INTEGER
      }
  })
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("IndividualMealPlan")
  }
};
