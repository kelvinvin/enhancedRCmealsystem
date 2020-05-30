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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        breakfastMonday: {
            type: DataTypes.INTEGER,
            default: false
        },
        breakfastTuesday: {
            type: DataTypes.INTEGER,
            default: false
        },
        breakfastWednesday: {
            type: DataTypes.INTEGER,
            default: false
        },
        breakfastThursday: {
            type: DataTypes.INTEGER,
            default: false
        },
        breakfastFriday: {
            type: DataTypes.INTEGER,
            default: false
        },
        breakfastSaturday: {
            type: DataTypes.INTEGER,
            default: false
        },
        dinnerSunday: {
            type: DataTypes.INTEGER,
            default: false
        },
        dinnerMonday: {
            type: DataTypes.INTEGER,
            default: false
        },
        dinnerTuesday: {
            type: DataTypes.INTEGER,
            default: false
        },
        dinnerWednesday: {
            type: DataTypes.INTEGER,
            default: false
        },
        dinnerThursday: {
            type: DataTypes.INTEGER,
            default: false
        },
        dinnerFriday: {
            type: DataTypes.INTEGER,
            default: false
        },
        extraCredit: {
            type: DataTypes.INTEGER
        },
        semesterYear: {
            type: DataTypes.STRING
        },
        id: {
            type: DataTypes.INTEGER
        }
    })
    StudentMealPlan.associate = function(models) {
        StudentMealPlan.belongsTo(models.User, { foreignKey: 'id' });
    };
    return StudentMealPlan
}