'use strict';


// Checks if first slot is open.
// if true list isn't emtpy.
Queue.prototype.isEmpty = function() {
  return this.queue[0] === undefined ? true : false;
};

// Checks if the last element is undefined.
Queue.prototype.isFull = function() {
  return this.queue[this.size - 1] === undefined ? false : true;
};

// Adds a new item on the list.
Queue.prototype.enqueue = function(item) {
  for(var i = 0; i < this.queue.length; i++) {
    if(!this.isFull()) {
      if(this.queue[i] === undefined) {
        this.queue[i] = item;
        return;
      }
    }
  }
};


// removes item on the list.
Queue.prototype.dequeue = function() {
  var popped = this.queue[0];
  console.log(this.isEmpty());
  if(this.isEmpty() === true) {
    return 'Error empty list';
  } else {

    for(var i = 0; i < this.queue.length - 1; i++) {
    this.queue[i] = this.queue[i + 1];
  }

    return popped;
  }

};

function Queue(size) {
  this.queue = new Array(size);
  this.size = size;
}

var list = new Queue(7);

for(var i = 1; i < list.size + 1; i++) {
  list.enqueue('ben ' + i);
}
  list.dequeue();
  list.dequeue();
