var express = require('express')
var app = express()

app.get('/', (req, res, next) => {
  res.send('It Works')
})

module.exports = app
