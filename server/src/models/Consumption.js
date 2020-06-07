module.exports = (sequelize, DataTypes) => {
    const Consumption = sequelize.define('Consumption', {
        consumption_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        breakfastOrDinner: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cuisineType: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    Consumption.associate = function(models) {
        Consumption.belongsTo(models.User);
    };
    return Consumption
}