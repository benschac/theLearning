let socket;

// Initialize server connection.
function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
  // onopen is a built in websocket method.
  socket.onopen = () => {
    // instead of writing socket.onopen = handlerFunction;
    // anonymous function to handle intermediary steps.
    console.log('open');
    handlerFunction();
  }
};

// interface for handling messages as they come in.
function registerMessageHandler(handlerFunction) {
  socket.onmessage = (e) => {
    console.log('message', e);
    // parse JSON data and convert from string to object.
    let data = JSON.parse(e.data);
    // pass to cb function to envoke.
    handlerFunction(data);
  }
}

// Convert object to string to send message to web socket server.
function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}


export default {
  // Shorthand for init: init -- enhanced object literal syntax.
  init,
  registerOpenHandler,
  registerMessageHandler,
  sendMessage
}
