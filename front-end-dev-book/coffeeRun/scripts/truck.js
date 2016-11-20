(function() {
'use strict';

var App = window.App || {};

function Truck(truckId, db) {
  this.truckId = truckId;
  this.db = db;
}

Truck.prototype.createOrder = function(order) {
  console.log(order.emailAddress, order);
  this.db.add(order.emailAddress, order);
}

Truck.prototype.deliverOrder = function(customerId) {
  console.log('removed ' + customerId);
  this.db.delete(customerId);
}

Truck.prototype.printOrders = function() {
  var customerIdArray = Object.keys(this.db.getAll());

  customerIdArray.forEach(function(id) {
    console.log(this.db.get(id));
    // Referse to Truck.prototype instead of
    // callback's this.
  }.bind(this));


// Alternative implementation.
  // for(var orders in this.db.getAll()) {
  //   console.log(orders);
  // }
}

App.Truck = Truck;
window.App = App;
})(window);
