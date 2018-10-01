const { Pool } = require('pg');

const config = {
  user: 'postgres', 
  database: 'dpsc', 
  password: 'postgres', 
  host: 'localhost', 
  port: 5432
};

const pool = new Pool(config);

pool.connect((err, client, release) => {
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