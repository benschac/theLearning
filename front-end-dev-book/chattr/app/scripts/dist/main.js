(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var ChatApp = function ChatApp() {
  _classCallCheck(this, ChatApp);

  // console.log('Hello es6!');
  _wsClient2.default.init('ws://localhost:3001');
  _wsClient2.default.registerOpenHandler(function () {
    var message = new ChatMessage({ message: 'Pow!' });
    _wsClient2.default.sendMessage(message.serialize());
  });
  _wsClient2.default.registerMessageHandler(function (data) {
    console.log(data);
  });
};

/*
Array deconstruction + default parameters.
- Giving an object as parameters you don't need to know which order
to add args.  You can use key/val params.
- You can add default params like 'batman' to the object and set the values to
instance variables.
*/


var ChatMessage = function () {
  function ChatMessage(_ref) {
    var m = _ref.message,
        _ref$user = _ref.user,
        u = _ref$user === undefined ? 'batman' : _ref$user,
        _ref$timestamp = _ref.timestamp,
        t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

    _classCallCheck(this, ChatMessage);

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


  _createClass(ChatMessage, [{
    key: 'serialize',
    value: function serialize() {
      return {
        user: this.user,
        message: this.message,
        timestamp: this.timestamp
      };
    }
  }]);

  return ChatMessage;
}();

exports.default = ChatApp;

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var socket = void 0;

// Initialize server connection.
function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
  // onopen is a built in websocket method.
  socket.onopen = function () {
    // instead of writing socket.onopen = handlerFunction;
    // anonymous function to handle intermediary steps.
    console.log('open');
    handlerFunction();
  };
};

// interface for handling messages as they come in.
function registerMessageHandler(handlerFunction) {
  socket.onmessage = function (e) {
    console.log('message', e);
    // parse JSON data and convert from string to object.
    var data = JSON.parse(e.data);
    // pass to cb function to envoke.
    handlerFunction(data);
  };
}

// Convert object to string to send message to web socket server.
function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}

exports.default = {
  // Shorthand for init: init -- enhanced object literal syntax.
  init: init,
  registerOpenHandler: registerOpenHandler,
  registerMessageHandler: registerMessageHandler,
  sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUFFQTs7SUFDTSxPLEdBQ0osbUJBQWM7QUFBQTs7QUFDWjtBQUNBLHFCQUFPLElBQVAsQ0FBWSxxQkFBWjtBQUNBLHFCQUFPLG1CQUFQLENBQTJCLFlBQU07QUFDL0IsUUFBSSxVQUFVLElBQUksV0FBSixDQUFnQixFQUFDLFNBQVMsTUFBVixFQUFoQixDQUFkO0FBQ0EsdUJBQU8sV0FBUCxDQUFtQixRQUFRLFNBQVIsRUFBbkI7QUFDRCxHQUhEO0FBSUEscUJBQU8sc0JBQVAsQ0FBOEIsVUFBQyxJQUFELEVBQVU7QUFDdEMsWUFBUSxHQUFSLENBQVksSUFBWjtBQUNELEdBRkQ7QUFHRCxDOztBQUlIOzs7Ozs7Ozs7SUFPTSxXO0FBQ0osNkJBSUc7QUFBQSxRQUhRLENBR1IsUUFIRCxPQUdDO0FBQUEseUJBRkQsSUFFQztBQUFBLFFBRkssQ0FFTCw2QkFGTyxRQUVQO0FBQUEsOEJBREQsU0FDQztBQUFBLFFBRFUsQ0FDVixrQ0FEYSxJQUFJLElBQUosRUFBRCxDQUFhLE9BQWIsRUFDWjs7QUFBQTs7QUFDRCxTQUFLLE9BQUwsR0FBZSxDQUFmO0FBQ0EsU0FBSyxJQUFMLEdBQVksQ0FBWjtBQUNBLFNBQUssU0FBTCxHQUFpQixDQUFqQjtBQUNEO0FBQ0Q7Ozs7Ozs7Ozs7Z0NBTVk7QUFDVixhQUFPO0FBQ0wsY0FBTSxLQUFLLElBRE47QUFFTCxpQkFBUyxLQUFLLE9BRlQ7QUFHTCxtQkFBVyxLQUFLO0FBSFgsT0FBUDtBQUtEOzs7Ozs7a0JBTVksTzs7Ozs7QUNyRGY7Ozs7OztBQUNBOzs7Ozs7OztBQ0RBLElBQUksZUFBSjs7QUFFQTtBQUNBLFNBQVMsSUFBVCxDQUFjLEdBQWQsRUFBbUI7QUFDakIsV0FBUyxJQUFJLFNBQUosQ0FBYyxHQUFkLENBQVQ7QUFDQSxVQUFRLEdBQVIsQ0FBWSxlQUFaO0FBQ0Q7O0FBRUQsU0FBUyxtQkFBVCxDQUE2QixlQUE3QixFQUE4QztBQUM1QztBQUNBLFNBQU8sTUFBUCxHQUFnQixZQUFNO0FBQ3BCO0FBQ0E7QUFDQSxZQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0E7QUFDRCxHQUxEO0FBTUQ7O0FBRUQ7QUFDQSxTQUFTLHNCQUFULENBQWdDLGVBQWhDLEVBQWlEO0FBQy9DLFNBQU8sU0FBUCxHQUFtQixVQUFDLENBQUQsRUFBTztBQUN4QixZQUFRLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLENBQXZCO0FBQ0E7QUFDQSxRQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsRUFBRSxJQUFiLENBQVg7QUFDQTtBQUNBLG9CQUFnQixJQUFoQjtBQUNELEdBTkQ7QUFPRDs7QUFFRDtBQUNBLFNBQVMsV0FBVCxDQUFxQixPQUFyQixFQUE4QjtBQUM1QixTQUFPLElBQVAsQ0FBWSxLQUFLLFNBQUwsQ0FBZSxPQUFmLENBQVo7QUFDRDs7a0JBR2M7QUFDYjtBQUNBLFlBRmE7QUFHYiwwQ0FIYTtBQUliLGdEQUphO0FBS2I7QUFMYSxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBzb2NrZXQgZnJvbSAnLi93cy1jbGllbnQnO1xuXG4ndXNlIHN0cmljdCc7XG5jbGFzcyBDaGF0QXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ0hlbGxvIGVzNiEnKTtcbiAgICBzb2NrZXQuaW5pdCgnd3M6Ly9sb2NhbGhvc3Q6MzAwMScpO1xuICAgIHNvY2tldC5yZWdpc3Rlck9wZW5IYW5kbGVyKCgpID0+IHtcbiAgICAgIGxldCBtZXNzYWdlID0gbmV3IENoYXRNZXNzYWdlKHttZXNzYWdlOiAnUG93ISd9KTtcbiAgICAgIHNvY2tldC5zZW5kTWVzc2FnZShtZXNzYWdlLnNlcmlhbGl6ZSgpKTtcbiAgICB9KTtcbiAgICBzb2NrZXQucmVnaXN0ZXJNZXNzYWdlSGFuZGxlcigoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSlcbiAgfVxufVxuXG5cbi8qXG5BcnJheSBkZWNvbnN0cnVjdGlvbiArIGRlZmF1bHQgcGFyYW1ldGVycy5cbi0gR2l2aW5nIGFuIG9iamVjdCBhcyBwYXJhbWV0ZXJzIHlvdSBkb24ndCBuZWVkIHRvIGtub3cgd2hpY2ggb3JkZXJcbnRvIGFkZCBhcmdzLiAgWW91IGNhbiB1c2Uga2V5L3ZhbCBwYXJhbXMuXG4tIFlvdSBjYW4gYWRkIGRlZmF1bHQgcGFyYW1zIGxpa2UgJ2JhdG1hbicgdG8gdGhlIG9iamVjdCBhbmQgc2V0IHRoZSB2YWx1ZXMgdG9cbmluc3RhbmNlIHZhcmlhYmxlcy5cbiovXG5jbGFzcyBDaGF0TWVzc2FnZSB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBtZXNzYWdlOiBtLFxuICAgIHVzZXI6IHU9J2JhdG1hbicsXG4gICAgdGltZXN0YW1wOiB0PShuZXcgRGF0ZSgpKS5nZXRUaW1lKClcbiAgfSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG07XG4gICAgdGhpcy51c2VyID0gdTtcbiAgICB0aGlzLnRpbWVzdGFtcCA9IHQ7XG4gIH1cbiAgLypcbiAgLSBXZSBkb24ndCB3YW50IHRvIHNlbmQgYWxsIG9mIENoYXRNZXNzYWdlcydzIG1ldGhvZCdzIHRocm91Z2ggd2Vic29ja2V0cy5cbiAgLSBXZSB3YW50IGEgc2VyaWFsaXplZC9zdHJpcHBlZCBkb3duIHZlcnNpb24gd2l0aCBqdXN0IHRoZSBkYXRhIHdlIHdhbnQgdG9cbiAgcGFzcy5cbiAgLSBzZXJpYWxpemUgbWV0aG9kIG9ubHkgc2VuZHMgbWVzc2FnZSBpbmZvLlxuICAqL1xuICBzZXJpYWxpemUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHRoaXMudXNlcixcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIHRpbWVzdGFtcDogdGhpcy50aW1lc3RhbXBcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdEFwcDtcbiIsImltcG9ydCBDaGF0QXBwIGZyb20gJy4vYXBwJztcbm5ldyBDaGF0QXBwKCk7XG4iLCJsZXQgc29ja2V0O1xuXG4vLyBJbml0aWFsaXplIHNlcnZlciBjb25uZWN0aW9uLlxuZnVuY3Rpb24gaW5pdCh1cmwpIHtcbiAgc29ja2V0ID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICBjb25zb2xlLmxvZygnY29ubmVjdGluZy4uLicpO1xufVxuXG5mdW5jdGlvbiByZWdpc3Rlck9wZW5IYW5kbGVyKGhhbmRsZXJGdW5jdGlvbikge1xuICAvLyBvbm9wZW4gaXMgYSBidWlsdCBpbiB3ZWJzb2NrZXQgbWV0aG9kLlxuICBzb2NrZXQub25vcGVuID0gKCkgPT4ge1xuICAgIC8vIGluc3RlYWQgb2Ygd3JpdGluZyBzb2NrZXQub25vcGVuID0gaGFuZGxlckZ1bmN0aW9uO1xuICAgIC8vIGFub255bW91cyBmdW5jdGlvbiB0byBoYW5kbGUgaW50ZXJtZWRpYXJ5IHN0ZXBzLlxuICAgIGNvbnNvbGUubG9nKCdvcGVuJyk7XG4gICAgaGFuZGxlckZ1bmN0aW9uKCk7XG4gIH1cbn07XG5cbi8vIGludGVyZmFjZSBmb3IgaGFuZGxpbmcgbWVzc2FnZXMgYXMgdGhleSBjb21lIGluLlxuZnVuY3Rpb24gcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcihoYW5kbGVyRnVuY3Rpb24pIHtcbiAgc29ja2V0Lm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ21lc3NhZ2UnLCBlKTtcbiAgICAvLyBwYXJzZSBKU09OIGRhdGEgYW5kIGNvbnZlcnQgZnJvbSBzdHJpbmcgdG8gb2JqZWN0LlxuICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuICAgIC8vIHBhc3MgdG8gY2IgZnVuY3Rpb24gdG8gZW52b2tlLlxuICAgIGhhbmRsZXJGdW5jdGlvbihkYXRhKTtcbiAgfVxufVxuXG4vLyBDb252ZXJ0IG9iamVjdCB0byBzdHJpbmcgdG8gc2VuZCBtZXNzYWdlIHRvIHdlYiBzb2NrZXQgc2VydmVyLlxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UocGF5bG9hZCkge1xuICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShwYXlsb2FkKSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBTaG9ydGhhbmQgZm9yIGluaXQ6IGluaXQgLS0gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWwgc3ludGF4LlxuICBpbml0LFxuICByZWdpc3Rlck9wZW5IYW5kbGVyLFxuICByZWdpc3Rlck1lc3NhZ2VIYW5kbGVyLFxuICBzZW5kTWVzc2FnZVxufVxuIl19
