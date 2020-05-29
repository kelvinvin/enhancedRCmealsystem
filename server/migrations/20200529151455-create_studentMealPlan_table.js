'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("StudentMealPlan", {
      studentMealPlan_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      recessWeek: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      dietaryRequirement: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      breakfastMonday: {
          type: Sequelize.INTEGER,
          default: false
      },
      breakfastTuesday: {
          type: Sequelize.INTEGER,
          default: false
      },
      breakfastWednesday: {
          type: Sequelize.INTEGER,
          default: false
      },
      breakfastThursday: {
          type: Sequelize.INTEGER,
          default: false
      },
      breakfastFriday: {
          type: Sequelize.INTEGER,
          default: false
      },
      breakfastSaturday: {
          type: Sequelize.INTEGER,
          default: false
      },
      dinnerSunday: {
          type: Sequelize.INTEGER,
          default: false
      },
      dinnerMonday: {
          type: Sequelize.INTEGER,
          default: false
      },
      dinnerTuesday: {
          type: Sequelize.INTEGER,
          default: false
      },
      dinnerWednesday: {
          type: Sequelize.INTEGER,
          default: false
      },
      dinnerThursday: {
          type: Sequelize.INTEGER,
          default: false
      },
      dinnerFriday: {
          type: Sequelize.INTEGER,
          default: false
      },
      extraCredit: {
          type: Sequelize.INTEGER
      },
      semesterYear: {
          type: Sequelize.STRING
      },
      id: {
          type: Sequelize.INTEGER
      }
  })
},

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable("StudentMealPlan")
  }
};
