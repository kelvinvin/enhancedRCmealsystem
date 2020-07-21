const allDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

module.exports = (sequelize, DataTypes) => {
  const Consumption = sequelize.define("Consumption", {
    consumption_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cuisineType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAtHour: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: function () {
        const now = new Date();
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
        const now = new Date();
        const timing = now.getHours() > 12 ? "di" : "bf";
        const day = allDays[now.getDay()];
        return timing + day;
      },
    },
  });

  Consumption.associate = function (models) {
    Consumption.belongsTo(models.User);
  };

// To generate 5 random consumptions with User Id: 1
    // Consumption.sync().then(function () {
    //   const numOfRandomSamples = 30;

    //   const start = new Date(2020, 5, 14, 8, 30, 00)
    //   const end = new Date(2020, 5, 30, 8, 30, 00)
    //   const diff =  end.getTime() - start.getTime();

    //   for (i = 0; i < numOfRandomSamples; i++) {
    //     const new_diff = diff * Math.random();
    //     const date = new Date(start.getTime() + new_diff);
    //     date.setMinutes(date.getMinutes() + 30);
    //     date.setMinutes(0);
    //     date.setSeconds(0);
    //     const timing = date.getHours() > 12 ? "di" : "bf";
    //     const day = allDays[date.getDay()];
    //     const dayTimingCat = timing + day;
    //     Consumption.create({
    //         cuisineType: "ASIAN",
    //         dayTimingCategory: dayTimingCat,
    //         UserId: 1,
    //         createdAtHour: date
    //     });
    //   }
    // });

  return Consumption;
};
