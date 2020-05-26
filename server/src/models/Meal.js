module.exports = (sequelize, DataTypes) => {
    const Meal = sequelize.define('Meal', {
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Meal
}