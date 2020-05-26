const {Meal} = require('../models/')

module.exports = {
    async getMeals (req, res) {
        try {
            // const meals = await Meal.findAll()
            // res.send(meals)
            const {date, link} = req.body
            const meals = await Meal.findOne({
                where: {
                    date: date
                }
            })
            if (!meals) {
                return res.status(403).send({
                    error: 'meal not found for that date'
                })
            }
            res.send(meals.link)

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