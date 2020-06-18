const {StudentMealPlan} = require('../models/')

module.exports = {
    async getStudentMealPlan (req, res) {
        try {
            const studentMealPlan = await StudentMealPlan.findAll(
            {
                where: {
                    UserId: req.body.userID
                }
            })
            res.send(studentMealPlan)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to get student meal plan'
            })
        }
    },

    async registerMealPlan (req, res) {
        try {
            const studentMealPlan = await StudentMealPlan.create(req.body)
            res.send(studentMealPlan)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to register meal plan'
            })
        } 
    },
    async getRegistered (req, res) {
        try {
            const registered = await StudentMealPlan.findAll()
            var bfMon = registered.filter(element => element.breakfastMonday == '1').length
            var bfTue = registered.filter(element => element.breakfastTuesday == '1').length
            var bfWed = registered.filter(element => element.breakfastWednesday == '1').length
            var bfThu = registered.filter(element => element.breakfastThursday == '1').length
            var bfFri = registered.filter(element => element.breakfastFriday == '1').length
            var bfSat = registered.filter(element => element.breakfastSaturday == '1').length
            var diSun = registered.filter(element => element.dinnerSunday == '1').length
            var diMon = registered.filter(element => element.dinnerMonday == '1').length
            var diTue = registered.filter(element => element.dinnerTuesday == '1').length
            var diWed = registered.filter(element => element.dinnerWednesday == '1').length
            var diThu = registered.filter(element => element.dinnerThursday == '1').length
            var diFri = registered.filter(element => element.dinnerFriday == '1').length
            var totalRec = registered.filter(element => element.recessWeek == '1').length
            var totalNoRec = registered.filter(element => element.recessWeek == '0').length
            var none = registered.filter(element => element.dietaryRequirement == 'none').length
            var halal = registered.filter(element => element.dietaryRequirement == 'halal').length
            var vegetarian = registered.filter(element => element.dietaryRequirement == 'vegetarian').length     
            res.send({
                    bfMon, bfTue, bfWed, bfThu, bfFri, bfSat, 
                        diSun, diMon, diTue, diWed, diThu, diFri,
                        totalRec, totalNoRec,
                        none, halal, vegetarian
                    })
        } catch (err) {
            res.status(500).send({
                error: 'There is an error retrieving the registered records'
            })
        }
    },
}
