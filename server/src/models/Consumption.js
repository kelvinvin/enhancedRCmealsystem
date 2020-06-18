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
        var d = new Date();
        d.setMinutes (d.getMinutes() + 30);
        d.setMinutes (0);
        d.setSeconds (0);
        return d;
      },
    },
  });

  Consumption.associate = function (models) {
    Consumption.belongsTo(models.User);
  };
  return Consumption;
};
