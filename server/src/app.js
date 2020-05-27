const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')
const mysql = require('mysql')

// const db = mysql.createConnection({

// })

// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE ehms'
//     db.query(sql, (err,result) => {
//         if (err) throw err;
//         console.log(result)
//         res.send('Database created...');
//     });
// });

// db.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Mysql Connected...')
// })

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// app.listen('8081', () => {
//     console.log('Server started on port 8081')
// })

require('./routes')(app)

sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })
