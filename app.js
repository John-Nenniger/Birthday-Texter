const env = require('dotenv').config();

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const knex = require('knex')({
  client: 'pg',
  connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_NAME
  }
});



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end(`This is just a server, please move on.`);
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
