module.exports = app => {

  const IndexRepository = app.domain.repositories.index

  class IndexController {   

    static async show(req, res){
      res.render('home/index')
    }

    static async create(req, res){
      let index = req.body
      IndexRepository.create()
        .then( (index) => {
          res.status(200).json(card)
        })
    }
  }
  return IndexController
}
