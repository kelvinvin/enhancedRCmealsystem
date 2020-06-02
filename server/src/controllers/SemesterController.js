const {SemesterDays} = require('../models')

module.exports = {
    async addSemester (req, res) {
        try {
            const exist = await SemesterDays.findOne({
                where: {
                    semesterYear: req.body.semesterYear
                }
            })
            if (!exist) {
                const post = await SemesterDays.create({
                    semesterYear: req.body.semesterYear,
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
            const semesters = await SemesterDays.findAll()
            res.send(semesters)
        } catch (err) {
            res.status(500).send({
                error: 'Cannot retrieve semester years'
            })
        }
    }
}
