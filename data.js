const moment = require('moment')

module.exports.posts = [{
  title: "Why Introduction to Node.js?",
  content: "JavaScript has been the most popular programming language for the last 6 years. The powerful Node.js runtime environment has been ranked the technology most commonly used by professional developers. Node.js is an event-driven JavaScript runtime. Node has myriad potential uses for JavaScript development including being a great environment for building efficient network applications.",
  url: "https://www.codecademy.com/learn/learn-node-js",
  updated: moment().format('LL')
}, {
  title: "Learning programming on Khan Academy",
  content: "In this course, we'll be teaching the concepts of the JavaScript programming language and the cool functions you can use with it in the ProcessingJS library. Before you dig in, here's a brief tour of how we teach programming here on Khan Academy, and how we think you can learn the most.",
  url: "https://www.khanacademy.org/computing/computer-programming/programming/intro-to-programming/a/learning-programming-on-khan-academy",
  updated: moment().format('LL')
}, {
  title: "Dockerizing a Node.js web app",
  content: "The goal of this example is to show you how to get a Node.js application into a Docker container. The guide is intended for development, and not for a production deployment. The guide also assumes you have a working Docker installation and a basic understanding of how a Node.js application is structured.",
  url: "https://nodejs.org/de/docs/guides/nodejs-docker-webapp/",
  updated: moment().format('LL')
}]