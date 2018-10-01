const { Pool } = require('pg');

function createDBConnection(){
  
  const config = {
    user: 'postgres', 
    database: 'dpsc', 
    password: 'postgres', 
    host: 'localhost', 
    port: 5432
  };

   return pool = new Pool(config)
    
}


module.exports = function(){
  return createDBConnection;
}
