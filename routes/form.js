var express = require('express')
var app = express()

app.get('/', (req, res, next) => {
  res.send('form')
})

module.exports = app
