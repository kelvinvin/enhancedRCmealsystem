module.exports = (sequelize, DataTypes) => 
    sequelize.define('Account', {
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
        },
})