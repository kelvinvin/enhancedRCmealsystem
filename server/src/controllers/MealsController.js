const {Meal} = require('../models/')

module.exports = {
    async getMeals (req, res) {
        try {
            const meals = await Meal.findAll()
            res.send(meals)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the meal'
            })
        }
    },
// }

// module.exports = {
    async addMeal (req, res) {
        try {
            const meal = await Meal.create(req.body)
            res.send(meal)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to add the meal'
            })
        } 
    }
}