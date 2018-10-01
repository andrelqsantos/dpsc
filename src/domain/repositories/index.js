module.exports = app => {

  const Index = app.domain.models.index

  class IndexRepository {   

    static async list(){
      let connection = app.domain.createDBConnection();
      let indexDAO = new Index(connection)

      indexDAO.list(function(err, result){
        if(err){
          return err
        }
        return result
      })
    }



  }
  return IndexRepository
}