module.exports = function(app){
  var IndexController = app.http.controllers.index

  app.route('/')
    .get(IndexController.show)
    .post(IndexController.create)
}