var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 3001;

var ws = new WebSocketServer({
  port: port
});

console.log('websockets started');
let messages = [];
ws.on('connection', function(socket) {
  // send message history to new users.
  messages.forEach(function(message) {
    socket.send(message);
  });
  console.log('client connection');

// send message
  socket.on('message', function(data) {
    console.log('message recived ' + data);
    // push to history
    messages.push(data);
    // send data to all clients.
    ws.clients.forEach(function(clientSocket) {
      clientSocket.send(data);
    })
  });



});
