import socket from './ws-client';
import {ChatForm, ChatList} from './dom';


const FORM_SELECTOR = '[data-chat="chat-form"]';
const INPUT_SELECTOR = '[data-chat="message-input"]';
const LIST_SELECTOR = '[data-chat="message-list"]';

'use strict';
class ChatApp {
  constructor() {
    // console.log('Hello es6!');
    this.chatForm = new ChatForm(FORM_SELECTOR, INPUT_SELECTOR);
    this.chatList = new ChatList(LIST_SELECTOR, "WonderWoman");
    socket.init('ws://localhost:3001');
    // open handler and envoke cb
    socket.registerOpenHandler(() => {
      // use instanciated ChatForm to send data on submit press.
      this.chatForm.init((data) => {
        // pass data from form to chat object.
        let message = new ChatMessage(data);
        socket.sendMessage(message.serialize())
        // serialize to only send message data, not obj methods too.

      });
    });
    socket.registerMessageHandler((data) => {

      console.log(data);
      let message = new ChatMessage(data);
      socket.sendMessage(message.serialize())
      this.chatList.drawMessage(message.serialize());
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
