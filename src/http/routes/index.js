module.exports = function(app){
  var IndexController = app.http.controllers.index

  app.route('/')
    .get(IndexController.list)
    .post(IndexController.create)
}