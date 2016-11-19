'use strict';



let range = (start, end) => {
  let tmp = [];
  for(let i = 1; i <= end; i++) {
    tmp.push(i);
  }

  return tmp;
}


let sum = (range) => {
  return range.reduce((prev, curr) => prev + curr);
}


console.log(sum(range(1,10)));
