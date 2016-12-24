const http = require('http');
const morgan = require('morgan');
const express = require('express');

var app = express();

app.use(morgan('combined'));

app.use((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain"});
  res.end("Hello World \n");
})

http.createServer(app).listen(1337);
console.log("Server running at http://localhost:1337/");
