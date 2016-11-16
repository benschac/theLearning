'use strict';

// Fizz Buzz
let sumThreeFive = () => {
  let count = 0, sum = 0;
  while(count < 1000) {
    if(count % 5 === 0 || count % 3 === 0) sum += count;


    count++;
  }

  return sum;
}

console.log(sumThreeFive());
