module.exports = (sequelize, DataTypes) => {
    const Feedback = sequelize.define('Feedback', {
        feedback_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        breakfastOrDinner: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cuisineType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
        },
        id: {
            type: DataTypes.INTEGER
        }
    })

    Feedback.associate = function(models) {
        Feedback.belongsTo(models.User, { foreignKey: 'id' });
    };
    return Feedback
}