const express = require('express')
const axios = require('axios')
const mailer = require('./mailer')
const data = require('./data')

const app = express()
app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: true }))

const sitename = "PersonalCraft"

app.get('/', (req, res) => {
    res.render('index', { sitename: sitename, title: 'Home', message: 'Hello there!' })
})

const server = app.listen(3000, () => {
    console.log(`App is running on port ${server.address().port}!`);
});