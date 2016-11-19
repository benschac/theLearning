'use strict';

let arrayToList = (array) => {
  var list = null;

  array.forEach((el, i) => {
    list = {value: array[i], rest: list};
  });

  return list;
};


let listToArray = (list) => {
  let array = [];
  // setting node.rest to the next internal object.
  // grabbing node's value.
  for(let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

let prepend = (value, list) => {
  return {value: value, rest: list};
}

let nth = (list, n) => {
  if(!list) return undefined;
  else if (n === 0) return list.value;
  else return nth(list.rest, n - 1);
}


console.log(arrayToList([1,2,3,4]));
console.log(listToArray(arrayToList([1,2,3,4])));
