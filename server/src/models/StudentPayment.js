module.exports = (sequelize, DataTypes) => {
    const StudentPayment = sequelize.define('StudentPayment', {
        payment_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        amount: {
            type: DataTypes.DOUBLE,
        },
        paymentMade: {
            type: DataTypes.INTEGER,
            default: false
        },
        id: {
            type: DataTypes.INTEGER
        },
        semesterYear: {
            type: DataTypes.STRING,
        }
    })

    StudentPayment.associate = function(models) {
        StudentPayment.belongsTo(models.User, { foreignKey: 'id' });
        StudentPayment.belongsTo(models.SemesterDays, { foreignKey: 'breakfastOrDinner' });
    };
    return StudentPayment
}