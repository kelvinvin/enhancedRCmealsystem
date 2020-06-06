const { StudentPayment } = require('../models')

module.exports = {
    async registerAmount (req, res) {
        try {
            const payment = await StudentPayment.create({
                amount: req.body.amount,
                SemesterDaySemesterYear: req.body.SemesterDaySemesterYear,
                paymentMade: 0,
                UserId: req.body.UserId
        })
            res.send(payment)
        } catch {
            res.status(406).send({
                error: 'Unable to register payment'
            })
        }
    },
}