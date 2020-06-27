const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Consumption = sequelize.define("Consumption", {
    consumption_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    breakfastOrDinner: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cuisineType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAtHour: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: function () {
        var now = new Date();
        now.setMinutes(now.getMinutes() + 30);
        now.setMinutes(0);
        now.setSeconds(0);
        return now;
      },
    },
    createdAtDay: {
      type: DataTypes.DATE,
      defaultValue: function() {
        return new Date().setHours(0,0,0,0);
      }
    },
    dayTimingCategory: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: function () {
        var now = new Date();
        var timing = now.getHours() > 12 ? "di" : "bf";
        const allDays = [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
        ];
        // var day = allDays[now.getDay()];
        var day = allDays[Math.floor(Math.random() * 7)
        ];
        return timing + day;
      },
    },
  });

  Consumption.associate = function (models) {
    Consumption.belongsTo(models.User);
  };
  return Consumption;
};
