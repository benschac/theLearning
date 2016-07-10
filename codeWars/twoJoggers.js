/*
	7/10/2016
	https://www.codewars.com/kata/two-joggers/javascript
	5 kyu;
	Notes: Todo -- refactor code.
	1. condense for loops into function.
	2. Use Math object methods to condense conditional.

*/



var nbrOfLaps = function (x, y) {
	var arr = [];
		function common() {

		for(var i = x; i < (x * y); i+= x) {
			if(i % x === 0 && i % y === 0) {
			break;
			}
		}

		for(var j = y; j < (x * y); j+= y) {
			if(j % x === 0 && j % y === 0) {
			break;
			}
		}

		arr.push((i / x));
		arr.push((j / y));

		return arr;
		
		}

	return common();
};