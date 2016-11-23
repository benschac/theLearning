const http = require('http');
const fs = require('fs');
const path = require('path');
const wss = require('./websockets-server');
// const extract = require('./extract');

var server = http.createServer(function(req, res) {
  console.log("responding to a request.");
  // Held in extract module.
  //
  //
  //
  var url = req.url;

  var fileName = 'index.html';
  if(url.length > 1) {
    // removes / from start of the string.
    fileName = url.substring(1);
  }
  console.log(fileName);
  console.log('test');

  // use custom functionality from module.

  var handleError = function(err, res) {
    res.writeHead(404);
    res.end();
  }
  var filePath = path.resolve(__dirname, 'app', fileName);
  // use file path found instead of hard coding it.
  fs.readFile(filePath, function(err, data) {
    if(err) {
      console.log(err);
      handleError(err, res);
      return;
    } else {
      res.end(data);
    }

  })

})

server.listen(3000);
