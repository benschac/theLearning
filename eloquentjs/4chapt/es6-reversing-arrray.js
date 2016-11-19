'use strict';


let reverseArray = (arr) => {
  let tmp = [];
  for(let i = arr.length -1; i >= 0; i--) {
    tmp.push(arr[i]);
  }
  return tmp;
}


let reverseArrayInPlace = (arr) => {

  for(let i = 0; i < Math.floor((arr.length -1 / 2)); i++) {

    let tmp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tmp;

  }

  return arr;
}


// console.log(reverseArray(['a', 'b', 'c']));
console.log(reverseArrayInPlace([1,2,3,4,5]));
