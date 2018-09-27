module.exports = app => {

  //co

  class Index {   

    static async show(req, res){
      res.render('home/index')
    }

    static async create(req, res){
      res.json({test: 'test'})
    }
  }
  return Index
}
