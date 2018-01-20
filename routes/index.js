var express = require('express')
var app = express()

app.get('/', (req, res, next) => {
  res.render('index')
})

module.exports = app
