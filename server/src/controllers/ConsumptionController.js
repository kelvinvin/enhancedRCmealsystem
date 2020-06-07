const { Consumption, StudentMealPlan } = require('../models/')

module.exports = {
    async getConsumptions (req, res) {
        try {
            const consumption = await StudentMealPlan.findAll()
            var bfMon = consumption.filter(element => element.breakfastMonday == '1').length
            var bfTue = consumption.filter(element => element.breakfastTuesday == '1').length
            var bfWed = consumption.filter(element => element.breakfastWednesday == '1').length
            var bfThu = consumption.filter(element => element.breakfastThursday == '1').length
            var bfFri = consumption.filter(element => element.breakfastFriday == '1').length
            var bfSat = consumption.filter(element => element.breakfastSaturday == '1').length
            var diSun = consumption.filter(element => element.dinnerSunday == '1').length
            var diMon = consumption.filter(element => element.dinnerMonday == '1').length
            var diTue = consumption.filter(element => element.dinnerTuesday == '1').length
            var diWed = consumption.filter(element => element.dinnerWednesday == '1').length
            var diThu = consumption.filter(element => element.dinnerThursday == '1').length
            var diFri = consumption.filter(element => element.dinnerFriday == '1').length
            var totalRec = consumption.filter(element => element.recessWeek == '1').length
            var totalNoRec = consumption.filter(element => element.recessWeek == '0').length
            var none = consumption.filter(element => element.dietaryRequirement == 'none').length
            var halal = consumption.filter(element => element.dietaryRequirement == 'halal').length
            var vegetarian = consumption.filter(element => element.dietaryRequirement == 'vegetarian').length     
            res.send({
                    bfMon, bfTue, bfWed, bfThu, bfFri, bfSat, 
                        diSun, diMon, diTue, diWed, diThu, diFri,
                        totalRec, totalNoRec,
                        none, halal, vegetarian
                    })
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