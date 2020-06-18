const { Consumption} = require('../models/')

module.exports = {
    async getConsumption (req, res) {
        try {
            const meals = await Consumption.count({
                attributes: ["createdAtHour"
                ],
                group: "createdAtHour"
            })
            var consumptionArray = [];
            for (var i = 0 ; i < meals.length; i++) {
                var consumptionObj = {x: meals[i].createdAtHour, y: meals[i].count}
                consumptionArray.push(consumptionObj);
              }
            res.send(consumptionArray)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the consumption records'
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