module.exports = (sequelize, DataTypes) => {
    const StudentMealPlan = sequelize.define('StudentMealPlan', {
        studentMealPlan_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        recessWeek: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dietaryRequirement: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bfMon: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        bfTue: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        bfWed: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        bfThu: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        bfFri: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        bfSat: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        diSun: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        diMon: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        diTue: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        diWed: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        diThu: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        diFri: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        extraCredit: {
            type: DataTypes.INTEGER
        },
    })
    StudentMealPlan.associate = function(models) {
        StudentMealPlan.belongsTo(models.User);
    };
    return StudentMealPlan
}