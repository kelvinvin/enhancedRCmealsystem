module.exports = (sequelize, DataTypes) => 
    sequelize.define('Account', {
        matric_Id: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.email,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.password,
            allowNull: false
        },
        full_Name: {
            type: DataTypes.STRING,
        },
        total_Meals: {
            type: DataTypes.INTEGER,
        },
        meals_Consumed: {
            type: DataTypes.INTEGER,
        },
        meals_Left: {
            type: DataTypes.INTEGER,
        },
        payment: {
            type: DataTypes.BOOLEAN,
        },
        total_Amount: {
            type: DataTypes.INTEGER,
        }
})