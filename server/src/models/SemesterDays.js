module.exports = (sequelize, DataTypes) => {
    const SemesterDays = sequelize.define('SemesterDays', {
        semesterYear: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        totalWeeksWithRecWeek: {
            type: DataTypes.INTEGER,
        },
        totalWeeksWithoutRecWeek: {
            type: DataTypes.INTEGER,
        },
        // breakfastOrDinner: {
        //     type: DataTypes.INTEGER,
        // }
    })
    SemesterDays.associate = function(models) {
        SemesterDays.belongsTo(models.MealCost);
        SemesterDays.hasOne(models.StudentPayment);
    };
    return SemesterDays
}