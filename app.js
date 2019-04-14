const express = require('express')
const axios = require('axios')
const mailer = require('./mailer')
const data = require('./data')

const app = express()
app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: true }))

const sitename = "PersonalCraft"

axios.get(process.env.GITHUB)
  .then((response) => {
    const account = response.data
    app.get('/', (req, res) => {
      res.render('index', { sitename: sitename, title: 'Home', account: account })
    })

    app.get('/contact', (req, res) => {
      res.render('contact', { sitename: sitename, title: 'Contact', account: account })
    })

    app.get('/posts', (req, res) => {
      res.render('posts', { sitename: sitename, title: 'Posts', posts: data.posts, account: account })
    })

    app.post('/contact', (req, res) => {
      var options = {
        from: '"'+ req.body.full_name + '" <' + req.body.email + '>',
        to: process.env.EMAIL,
        subject: 'Sending Email using Node.js',
        text: req.body.comment
      };
      mailer.send(options).catch(console.error)
      res.render('contact', { sitename: sitename, title: 'Contact', account: account, showAlert: true })
    })

    const server = app.listen(process.env.PORT, () => {
      console.log(`App is running on port ${server.address().port}!`);
    });
  })
  .catch((error) => console.log(error));