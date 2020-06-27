const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
    const SALT_FACTOR = 8
    if (!user.changed('password')) {
        return;
    }
    return bcrypt.genSaltAsync(SALT_FACTOR)
                    .then(salt => bcrypt.hashAsync(user.password, salt, null))
                    .then (hash => {
                        user.setDataValue('password', hash)
                    })
}
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        matric_id: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    
    {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
        }
    })
    
    User.prototype.comparePassword = function (password) {
        return bcrypt.compareAsync(password, this.password)
    }

    User.associate = function(models) {
        User.hasOne(models.StudentMealPlan);
        User.hasMany(models.Feedback);
        User.hasMany(models.Consumption);
        User.hasOne(models.StudentPayment);
    };

    User.sync().then(function () {
        const now = new Date();
        User.findOrCreate({
            where: {
                isAdmin: 1,
            },
            defaults: {
                name: "admin",
                email: "admin",
                matric_id: "A0000000A",
                password: "P@ssw0rd1",
                // password is P@ssw0rd1,
                isAdmin: 1,
                createdAt: now,
                updatedAt: now                
            }
        });
        User.findOrCreate({
            where: {
                isAdmin: 0,
            },
            defaults: {
                name: "test",
                email: "test",
                matric_id: "A1234567A",
                password: "P@ssw0rd1",
                // password is P@ssw0rd1,
                isAdmin: 0,
                createdAt: now,
                updatedAt: now                
            }
        });
    });
    return User
}