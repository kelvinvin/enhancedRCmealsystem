const { Consumption } = require('../models/')

module.exports = {
    async getConsumptions (req, res) {
        try {
            const consumption = await Consumption.findAll()
            res.send(consumption)
        } catch (err) {
            res.status(500).send({
                error: 'There is an error retrieving the consumption records'
            })
        }
    },

    async submitConsumption (req, res) {
        try {
            const consumption = await Consumption.create(req.body)
            res.send(consumption)
        } catch {
            res.status(400).send({
                error: 'Consumption cannot be submitted'
            })
        }
    }
}