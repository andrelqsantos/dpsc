var express = require('./src/config/express')
var app = express()

app.listen(5000, function(){
  console.log('Server Started...')
});