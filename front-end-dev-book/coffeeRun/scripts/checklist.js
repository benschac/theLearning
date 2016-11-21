(function(window) {
  'use strict';


  var App = window.App || {};
  var $ = window.jQuery;


  function CheckList(selector) {
    if(!selector) {
      throw new Error('No selector provided.');
    }

    this.$element = $(selector);
    if(this.$element.length === 0) {
      throw new Error('Could not find the element with selector: ' + selector);
    }
  }

  CheckList.prototype.addRow = function(coffeeOrder) {

    this.removeRow(coffeeOrder.emailAddress);
    var rowElement = new Row(coffeeOrder);

    // instance div appended to DOM here.
    this.$element.append(rowElement.$element);
  }

  CheckList.prototype.addClickHandler = function(fn) {
    // register event listener on input.
    /*
    Event delegation: Events like a click propogate through the
    DOM, so each anciestor element is informed about the event.
    It's easier to run the event of the container and filter than
    run it on what element caused the event.
    */
    this.$element.on('click', 'input', function(event) {
      var email = event.target.value;
      // Remove the row
      this.removeRow(email);
      // pass email to the callback.
      fn(email);
      // Setting context of 'this' to this.$element.on and not
      // the anonymous function's this.
    }.bind(this));
  }

  CheckList.prototype.removeRow = function(email) {
    this.$element
      .find('[value="' + email + '"]')
      .closest('[data-coffee-order="checkbox"]')
      .remove();
  }


  function Row(coffeeOrder) {
    // creates jQuery object
    var $div = $('<div></div>', {
      'data-coffee-order': 'checkbox',
      'class': 'checkbox'
    });
    // creates label jQuery Object.
    var $label = $('<label></label>');
    // creates input checkbox jquery object with type
    // and value attrs.
    var $checkbox = $('<input></input>', {
      type: 'checkbox',
      value: coffeeOrder.emailAddress
    });
    // append data to description.
    var description = coffeeOrder.size + ' ';
    if(coffeeOrder.flavor) {
      description += coffeeOrder.flavor + ' ';
    }

    // adds coffee size.
    description += coffeeOrder.size + ' ';
    // adds email address.
    description += ' (' + coffeeOrder.emailAddress + ')';
    // adds drink strength.
    description += '[' + coffeeOrder.strength + 'x]';

    // appends check box to label.
    $label.append($checkbox);
    // appends description to label.
    $label.append(description);
    // appends label to div.
    $div.append($label);
    // save $div to an instance variable to use when
    // instanciated.
    this.$element = $div;
  }


  App.CheckList = CheckList;
  window.App = App;
})(window);
