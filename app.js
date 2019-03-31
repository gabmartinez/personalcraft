const express = require('express')

const app = express()
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

const server = app.listen(3000, () => {
    console.log(`App is running on port ${server.address().port}!`);
});