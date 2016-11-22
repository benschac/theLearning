(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  RemoteDataStore.prototype.add = function(key, val) {
    console.log(this.serverUrl);
    $.post(this.serverUrl, val, function(response) {
      console.log(response);
    });
  }

  RemoteDataStore.prototype.delete = function(key) {
    return $.ajax(this.serverUrl + '/' + key, {
      type: 'DELETE'
    });
  }

  RemoteDataStore.prototype.get = function(key, cb) {
    return $.get(this.serverUrl + '/' + key, function(response) {
      if(cb) {
        console.log(response);
        cb(response);
      }
      console.log(response);
    });
  }


  RemoteDataStore.prototype.getAll = function(cb) {
    return $.get(this.serverUrl, function(response) {
      if(cb) {
        console.log(response);
        cb(response);
      }
      // console.log(response);
    });
  }

  function RemoteDataStore(url) {
    if(!url) {
      throw new Error('No remote URL supplied');
    }

    this.serverUrl = url;
  }

App.RemoteDataStore = RemoteDataStore;
window.App = App;
})(window);
