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
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
            // console.log($(userJson))
        } catch {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
            res.status(400).json({ msg: 'This email account is already in use'})
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
                    error: 'The login user information was incorrect'
                })
            }

            const isPasswordValid = await user.comparePassword(password)
            // const isPasswordValid = password === user.password
            if (!isPasswordValid) { 
                     console.log(isPasswordValid)
                    console.log(password)
                    console.log(user.password)
                return res.status(404).send({
                    error: 'The login pass information was incorrect'
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