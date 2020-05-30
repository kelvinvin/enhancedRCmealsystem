const {Feedback} = require('../models/')

module.exports = {
    async getFeedbacks (req, res) {
        try {
            const feedback = await Feedback.findAll()
            res.send(feedback)
        } catch (err) {
            res.status(500).send({
                error: 'There is an error retrieving the feedbacks'
            })
        }
    },

    async submitFeedback (req, res) {
        try {
            const feedback = await Feedback.create(req.body)
            res.send({
                feedback
            })
        } catch {
            res.status(400).send({
                error: 'Feedback cannot be submitted'
            })
        }
    }
}