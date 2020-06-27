const { Consumption } = require('../models/')
const { StudentMealPlan } = require('../models/')

module.exports = {
    async getConsumption(req, res) {
        try {
            const meals = await Consumption.count({
                attributes: ["createdAtHour"
                ],
                group: "createdAtHour"
            })
            var consumptionArray = [];
            for (var i = 0; i < meals.length; i++) {
                var consumptionObj = { x: meals[i].createdAtHour, y: meals[i].count }
                consumptionArray.push(consumptionObj);
            }
            res.send(consumptionArray)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the consumption records'
            })
        }
    },
    async submitConsumption(req, res) {
        try {
            // const test = await Consumption.count({
            //     where: {
            //         UserId: req.body.UserId,
            //         // createdAtDay: new Date().setHour(0,0,0,0),
            //         breakfastOrDinner: req.body.breakfastOrDinner,
            //     },
            // }).then(result => {
            //     console.log(result)
            //     if (result <= 3) {
            //     Consumption.create(req.body)}
            // })

            // const creditLeft = StudentMealPlan.findOne({
            //     where: {
            //         UserId: req.body.UserId
            //     }
            // }).then(response => response.extraCredit)
            // console.log("counter", counterForSesssion)
            // console.log(creditLeft)

            // if (counterForSesssion <= 30) {
            //     const update = await Consumption.create(req.body)
            //     res.send(update)
            // }
            const update = await Consumption.create(req.body)
            res.send(update)

        } catch {
            res.status(400).send({
                error: 'Consumption cannot be submitted'
            })
        }
    },
    async getConsumptionPercentage(req, res) {
        try {
            const meals = await Consumption.count({
                attributes: ["dayTimingCategory"
                ],
                group: "dayTimingCategory"
            })
            const registered = await StudentMealPlan.findAll()
            var calculated = meals.map(x => {
                x.wasted = registered.filter(element => element[x.dayTimingCategory] == '1').length - x.count;
                return x
            })
            res.send(calculated)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the consumption records'
            })
        }
    }
}