(function(window) {
  'use strict';

  var App = window.App || {};
  var Promise = window.Promise;

  function DataStore() {

    this.data = {};
  }

  function promisedResolvedWith(value) {
    var promise = new Promise(function(resolve, reject) {
      resolve(value);
    });

    return promise;
  }

  DataStore.prototype.add = function(key, val) {

    // var promise = new Promise(function(resolve, reject) {
    //     this.data[key] = val;
    //     resolve(null);

    return promisedResolvedWith(null);
  };

  DataStore.prototype.get = function(key) {
    return promisedResolvedWith(this.data[key]);
  }

  DataStore.prototype.getAll = function() {
    return promisedResolvedWith(this.data);

  }

  DataStore.prototype.delete = function(key) {
    return promisedResolvedWith(null);
  }

  App.DataStore = DataStore;

  var ds = new App.DataStore();

  window.App = App;

})(window);
