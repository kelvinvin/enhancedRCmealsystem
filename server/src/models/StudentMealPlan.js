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
        breakfastMonday: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        breakfastTuesday: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        breakfastWednesday: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        breakfastThursday: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        breakfastFriday: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        breakfastSaturday: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        dinnerSunday: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        dinnerMonday: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        dinnerTuesday: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        dinnerWednesday: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        dinnerThursday: {
            type: DataTypes.INTEGER,
            // default: '0'
        },
        dinnerFriday: {
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