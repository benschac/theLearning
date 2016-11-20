(function(window) {
  'use strict';

  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;

  var truck = new Truck('ncc-1701', new DataStore());

  window.truck = truck;
})(window);
