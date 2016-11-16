// ES6 Solution.

'use strict';

let loopTriangle = (size = 7, type = '#') => {
  let row = '';

for(let i = 1; i < size + 1; i++) {
  let count = 0;
  while(count < i) {
      row += type;
      count++;
  }
    row += '\n';
}
  console.log(row);
}



loopTriangle();
