(function() {
'use strict';

var App = window.App || {};

function Truck(truckId, db) {
  this.truckId = truckId;
  this.db = db;
}

Truck.prototype.createOrder = function(order) {
  console.log(order.emailAddress, order);
  return this.db.add(order.emailAddress, order);
}

Truck.prototype.deliverOrder = function(customerId) {
  console.log('removed ' + customerId);
  console.log('in deliver order:', this);
  return this.db.delete(customerId);
}

Truck.prototype.printOrders = function(printFn) {

  return this.db.getAll()
    .then(function(orders) {
      var customerIdArray = Object.keys(orders);
      console.log('before forEach this:', this);
      customerIdArray.forEach(id => {
      // console.log('in forEach this: ', this);
        console.log(orders[id]);
        if(printFn) {
          printFn(orders[id]);
        }
        // Referse to Truck.prototype instead of
        // callback's this.
    });
  }.bind(this));


// Alternative implementation.
  // for(var orders in this.db.getAll()) {
  //   console.log(orders);
  // }
}

App.Truck = Truck;
window.App = App;
})(window);
