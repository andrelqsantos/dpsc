module.exports = function(app){
  var Index = app.controllers.index

  app.route('/')
    .get(Index.show)
    .post(Index.create)
}