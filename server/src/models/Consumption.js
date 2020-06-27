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
    dayTimingCategory: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: function () {
        var now = new Date();
        var timing = now.getHours() > 12 ? "Din" : "Bf";
        const allDays = [
          "sunday",
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday",
        ];
        var day = allDays[now.getDay()];
        return day + timing;
      },
    },
  });

  Consumption.associate = function (models) {
    Consumption.belongsTo(models.User);
  };
  return Consumption;
};
