const {MealCost} = require('../models/')

module.exports = {
    async updateCost (req, res) {
        try {
            const exist = await MealCost.findOne({
                where: {
                    breakfastOrDinner: req.body.breakfastOrDinner
                }
            })
            if (!exist) {
                await MealCost.create({
                    breakfastOrDinner: req.body.breakfastOrDinner,
                })
            }
            const breakfastCost = await MealCost.update(
                {cost: req.body.cost},
                {where: {
                    breakfastOrDinner: req.body.breakfastOrDinner
                }
            })
            res.send(breakfastCost)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to update cost of meals'
            })
        }
    },

    async getCosts (req, res) {
        try {
            const allCosts = await MealCost.findAll()
            res.send(allCosts)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred trying to retrieve costs'
            })
        }
    }
}
