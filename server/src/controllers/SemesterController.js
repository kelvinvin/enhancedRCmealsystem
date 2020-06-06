const {SemesterDay} = require('../models')

module.exports = {
    async addSemester (req, res) {
        try {
            const exist = await SemesterDay.findOne({
                where: {
                    semesterYear: req.body.semesterYear
                }
            })
            if (!exist) {
                const post = await SemesterDay.create({
                    semesterYear: req.body.semesterYear,
                    totalWeeksWithRecWeek: req.body.totalWeeksWithRecWeek,
                    totalWeeksWithoutRecWeek: req.body.totalWeeksWithoutRecWeek
            })
                res.send(post)
            }
        } catch (err) {
            res.status(500).send({
                error: 'Semester year already exists'
            })
        }
    },

    async getSemesters (req, res) {
        try {
            const semesters = await SemesterDay.findAll()
            res.send(semesters)
        } catch (err) {
            res.status(500).send({
                error: 'Cannot retrieve semester years'
            })
        }
    },

    async getWeeks(req, res) {
        try {
            const response = await SemesterDay.findOne({
                where: {
                    semesterYear: req.body.semesterYear
                }
            })
            res.send(response)
        } catch (err) {
            res.status(506).send({
                error: 'Cannot retrieve rec week'
            })
        } 
    },

    async getCurrentSem(req, res) {
        try {
            const response = await SemesterDay.findOne({
                order: [[ 'createdAt', 'DESC']]
            })
            res.send(response)
        } catch (err) {
            res.status(507).send({
                error: 'Cannot retrieve current sem'
            })
        } 
    }
}
