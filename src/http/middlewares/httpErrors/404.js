module.exports = (app) => {
  return function (req, res, next){
    res.status(404).render('erros/404')
    next()
  }
  
}