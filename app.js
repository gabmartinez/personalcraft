const express = require('express')

const app = express()
app.set('view engine', 'pug')
const sitename = "PersonalCraft"

app.get('/', (req, res) => {
    res.render('index', { sitename: sitename, title: 'Home', message: 'Hello there!' })
})

const server = app.listen(3000, () => {
    console.log(`App is running on port ${server.address().port}!`);
});