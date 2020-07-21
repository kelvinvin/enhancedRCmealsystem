module.exports = (sequelize, DataTypes) => {
  const dayTimingCategory = sequelize.define("dayTimingCategory", {
    dayTimingName: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    dayOfWeek: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breakfastOrDinner: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  // dayTimingCategory.associate = function (models) {
  //   dayTimingCategory.hasMany(models.Consumption, {
  //     // foreignKey: 'dayTimingName'
  //   });
  // };

  dayTimingCategory.sync({ force: true }).then(function () {
    const now = new Date();
    const allDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const types = [
      { type: 1, name: "di" },
      { type: 0, name: "bf" },
    ];
    const disabledDays = ["diSat", "bfSun"];

    allDays.map((day) =>
      types.map((mealType) => {
        var modelName = mealType.name + day;
        if (!disabledDays.includes(modelName)) {
          dayTimingCategory.findOrCreate({
            where: {
              dayTimingName: modelName,
              breakfastOrDinner: mealType.type,
            },
            defaults: {
              dayTimingName: modelName,
              dayOfWeek: day,
              breakfastOrDinner: mealType.type,
              createdAt: now,
            },
          });
        }
        return;
      })
    );
  });
  return dayTimingCategory;
};
