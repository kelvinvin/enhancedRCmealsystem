const {StudentMealPlan} = require('../models/')

module.exports = {
    async getStudentMealPlans (req, res) {
        try {
            const studentMealPlan = await StudentMealPlan.findAll()
            res.send(studentMealPlan)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to get student meal plans'
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
    }
}