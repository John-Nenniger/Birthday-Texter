// This file just runs a simple http server to serve get requests (to keep the
// app from crashing).  The important part of this app is found in bin/checkDates

const env = require('dotenv').config();
// the above line brings in environment vaiables for development from a .env file
// that is ignored by git.

const http = require('http');
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end(`This is just a server, please move on.`);
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
