var express = require('express')
var load = require('express-load')
var httpErrors = require('../http/middlewares/httpErrors/404.js')

module.exports = function(){
  var app = express()

  app.use(express.static('./src/public'))
  app.set('view engine', 'ejs')
  app.set('views', './src/views')
  
  load('controllers', {cwd: 'src/http'})
    .then('routes')
    .into(app)

  app.use(httpErrors(app))
  
  return app
}