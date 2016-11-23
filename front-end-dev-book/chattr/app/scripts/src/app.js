'use strict';

class ChatApp {
  constructor({
    message: m,
    user: u="batman",
    timestamp: t=(new Date().getTime())
    // Deconstruct and use default parameters.
  }) {
    this.message = m;
    this.user = u;
    timestamp: t
  }
  serialize() {
    // send plain js object through web sockets.
    return {
      user: this.user,
      message: this.message,
      timestamp: timestamp;
    }
  }
}

export default new ChatApp();
