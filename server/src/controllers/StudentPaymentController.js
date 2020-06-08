const { StudentPayment } = require('../models')
const {User} = require('../models/')

module.exports = {
    async registerAmount (req, res) {
        try {
            const payment = await StudentPayment.create(req.body)
            res.send(payment)
        } catch {
            res.status(406).send({
                error: 'Unable to register payment'
            })
        }
    },

    async makePayment (req, res) {
        try {
            const { UserId } = req.body
            const payment = await StudentPayment.update({ paymentMade: true }, {
                where: {
                    UserId: UserId
                }
              });
            res.send(payment)
        } catch {
            res.status(406).send({
                error: 'Unable to update payment'
            })
        }
    },

    async getPayment (req, res) {
        try {
            const payment = await StudentPayment.findAll({
                include: [{
                    model: User,
                    attributes: ['matric_id'],
                    required: true
                }]
            });
            res.send(payment)
        } catch (err) {
            res.status(500).send({
                error: 'There is an error retrieving the payments'
            })
        }
    },
}

