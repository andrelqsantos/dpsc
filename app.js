var express = require('./src/config/express')
var app = express()

app.listen(5001, function(){
  console.log('Server Started...')
});