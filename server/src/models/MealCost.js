module.exports = (sequelize, DataTypes) => {
    const MealCost = sequelize.define('MealCost', {
        breakfastOrDinner: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        cost: {
            type: DataTypes.DOUBLE,
        }
    })
    MealCost.associate = function(models) {
        MealCost.hasMany(models.SemesterDays);
    };
    return MealCost
}