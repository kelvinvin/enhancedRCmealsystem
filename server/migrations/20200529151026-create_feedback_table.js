'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Feedback", {
      feedback_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      date: {
          type: Sequelize.DATEONLY,
          allowNull: false
      },
      breakfastOrDinner: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      rating: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      cuisineType: {
          type: Sequelize.STRING,
          allowNull: false
      },
      comment: {
          type: Sequelize.STRING,
      },
      id: {
          type: Sequelize.INTEGER
      }
  })
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Feedback")
  }
};
