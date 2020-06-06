module.exports = (sequelize, DataTypes) => {
    const SemesterDay = sequelize.define('SemesterDay', {
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
    })
    SemesterDay.associate = function(models) {
        SemesterDay.hasOne(models.StudentPayment);
    };
    return SemesterDay
}