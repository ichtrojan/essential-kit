var express = require('express')
var app = express()

const PORT =  3333

app.listen(PORT, (req, res, next) => {
  console.log('now serving on port ' + PORT)
})
