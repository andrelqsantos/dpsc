const pg = require('pg');
const connectionString = 'postgres://postgres:postgres@localhost:5432/dpsc'

const client = new pg.Client(connectionString);
client.connect(function(err){
  if (err) throw err
  console.log("Connected!")
})