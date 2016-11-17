'use strict';

let countChar = (string, char) => {
  let stringArr = [...string];

  return stringArr.filter(x => x === char).length;
};


let countBs = (string) => {
  return countChar(string, "B");
}


console.log(countBs("Bbbbben"));
console.log(countChar("bennnnn", "n"));
