'use strict';

let isEven = (num) => {


  if(num === 0) return true;
  if(num === 1) return false;
  if(num < 0) return isEven(num * -1);

  return isEven(num - 2);
};

console.log(isEven(-74));
