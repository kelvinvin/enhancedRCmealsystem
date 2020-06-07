const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async findMatric (req, res) {
        try {
            const user = await User.findByPk(req.UserId)
            res.send(user.matricId)
        } catch {
            res.status(400).send({
                error: 'No matricID found'
            })
        }
    },
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    },

    async login (req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                return res.status(403).send({
                    error: 'Incorrect user ID or password. Type the correct user ID and password, and try again.'
                })
            }
            
            const isPasswordValid = await user.comparePassword(password)
            if (!isPasswordValid) { 
                return res.status(404).send({
                    error: 'Incorrect user ID or password. Type the correct user ID and password, and try again.'
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to log in.'
            })
            // res.status(400).json({ msg: 'This email account is already in use'})
        }
    }
}