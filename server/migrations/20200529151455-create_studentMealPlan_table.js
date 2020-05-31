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
            type: Sequelize.STRING,
            allowNull: false
        },
        breakfastMonday: {
            type: Sequelize.INTEGER,
            // default: '0'
        },
        breakfastTuesday: {
            type: Sequelize.INTEGER,
            // default: '0'
        },
        breakfastWednesday: {
            type: Sequelize.INTEGER,
            // default: '0'
        },
        breakfastThursday: {
            type: Sequelize.INTEGER,
            // default: '0'
        },
        breakfastFriday: {
            type: Sequelize.INTEGER,
            // default: '0'
        },
        breakfastSaturday: {
            type: Sequelize.INTEGER,
            // default: '0'
        },
        dinnerSunday: {
            type: Sequelize.INTEGER,
            // default: '0'
        },
        dinnerMonday: {
            type: Sequelize.INTEGER,
            // default: '0'
        },
        dinnerTuesday: {
            type: Sequelize.INTEGER,
            // default: '0'
        },
        dinnerWednesday: {
            type: Sequelize.INTEGER,
            // default: '0'
        },
        dinnerThursday: {
            type: Sequelize.INTEGER,
            // default: '0'
        },
        dinnerFriday: {
            type: Sequelize.INTEGER,
            // default: '0'
        },
        extraCredit: {
            type: Sequelize.INTEGER
        },
  })
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("StudentMealPlan")
  }
};
