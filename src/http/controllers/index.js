module.exports = app => {

  const IndexRepository = app.domain.repositories.index

  class Index {   

    static async list(req, res){
      IndexRepository.list()
        .then( (index) => {
          res.status(200).json(index)
        })
    }

    static async create(req, res){
      let index = req.body
      IndexRepository.create()
        .then( (index) => {
          res.status(200).json(card)
        })
    }
  }
  return Index
}
