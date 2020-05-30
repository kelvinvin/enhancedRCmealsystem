'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("SemesterDays", {
        semesterYear: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        totalWeeksWithRecWeek: {
            type: Sequelize.INTEGER,
        },
        totalWeeksWithoutRecWeek: {
            type: Sequelize.INTEGER,
        },
        breakfastOrDinner: {
            type: Sequelize.INTEGER,
        }
    })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable("SemesterDays")
  }
};
