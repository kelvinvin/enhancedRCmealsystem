const {SemesterDays} = require('../models/')

module.exports = {
    async addSemester (req, res) {
        try {
            const exist = await SemesterDays.find({
                where: {
                    semesterYear: req.body.semesterYear
                }
            })
            if (!exist) {
                const semYear = await SemesterDays.create({
                    semesterYear: req.body.semesterYear,
                })
                res.send(semYear)
            }
        } catch (err) {
            res.status(500).send({
                error: 'Semester year already exists'
            })
        }
    },
}
