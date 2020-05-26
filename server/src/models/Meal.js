module.exports = (sequelize, DataTypes) => {
    const Meal = sequelize.define('Meal', {
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        PDFUrl: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Meal
}