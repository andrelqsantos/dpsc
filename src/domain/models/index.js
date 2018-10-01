function IndexDAO(connection){
  this._connection = connection
}

IndexDAO.prototype.list = function(callback){
  this._connection.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query('SELECT * FROM indexs', (err, result) => {
      release()
      if (err) {
        return console.error('Error executing query', err.stack)
      }
      console.log(result.rows)
    })
  })
}

module.exports = function(){
  return IndexDAO
}