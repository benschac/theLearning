(function(window) {
  'use strict';

  const FORM_SELECTOR = '[data-coffee-order="form"]';
  const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  const SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
  const App = window.App;
  const Truck = App.Truck;
  const DataStore = App.DataStore;
  const RemoteDataStore = App.RemoteDataStore;
  const FormHandler = App.FormHandler;
  const Validation = App.Validation;
  const CheckList = App.CheckList;
  const remoteDS = new RemoteDataStore(SERVER_URL);
  const truck = new Truck('ncc-1701', remoteDS);

  window.truck = truck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(truck.deliverOrder.bind(truck));
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
    // envoke both truck and checklist methods on
    // submit.  Pass instance to change with data.
    truck.createOrder.call(truck, data)
    .then(function() {
      checkList.addRow.call(checkList, data);
    },
    function() {
      alert('Server unreachable.  Try again later.');
    });

  });

  formHandler.addInputHandler(Validation.isCompanyEmail);

})(window);
