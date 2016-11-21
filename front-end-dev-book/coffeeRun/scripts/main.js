(function(window) {
  'use strict';

  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;

  var truck = new Truck('ncc-1701', new DataStore());

  window.truck = truck;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(truck.createOrder.bind(truck));
  console.log(formHandler);
})(window);
