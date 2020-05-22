const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            name: Joi.string(),
            email: Joi.string(),
            matric_id: Joi.string(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        const {error, value} = Joi.validate(req.body, schema)

        if (error) {
            switch(error.details[0].context.key) {
                case 'name':
                    break
                case 'email':
                res.status(400).send({
                    error: 'You must provide a valid email address'
                })
                break
                case 'matric_id':
                    res.status(400).send({
                        error: 'You must provide a valid matric id'
                    })
                    break
                case 'password':
                res.status(400).send({
                    error: `The password provided failed to match the following rules:
                    <br>
                    1. It must contian ONLY the following characters: lower case, upper case.
                    <br>
                    2. It must be at least 8 characters in length and not greater than 32 characters in length.
                    `
                })
                break
                default:
                    res.status(400).send({
                        error: 'Invalid registeration information'
                    })
            }
        } else {
            next()
        }
    }
}