import socket from './ws-client';

'use strict';
class ChatApp {
  constructor() {
    // console.log('Hello es6!');
    socket.init('ws://localhost:3001');
    socket.registerOpenHandler(() => {
      let message = new ChatMessage({message: 'Pow!'});
      socket.sendMessage(message.serialize());
    });
    socket.registerMessageHandler((data) => {
      console.log(data);
    })
  }
}


/*
Array deconstruction + default parameters.
- Giving an object as parameters you don't need to know which order
to add args.  You can use key/val params.
- You can add default params like 'batman' to the object and set the values to
instance variables.
*/
class ChatMessage {
  constructor({
    message: m,
    user: u='batman',
    timestamp: t=(new Date()).getTime()
  }) {
    this.message = m;
    this.user = u;
    this.timestamp = t;
  }
  /*
  - We don't want to send all of ChatMessages's method's through websockets.
  - We want a serialized/stripped down version with just the data we want to
  pass.
  - serialize method only sends message info.
  */
  serialize() {
    return {
      user: this.user,
      message: this.message,
      timestamp: this.timestamp
    }
  }
}




export default ChatApp;
