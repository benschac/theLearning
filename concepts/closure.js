/*
Closure:

MDN: Closures are functions that refer to independent (free) 
variables (variables that are used locally, but defined in an enclosing scope). 
In other words, these functions 'remember' the environment in which they were created.

1. Function in a function.
2. Function that has access to encapsulating functions variables.
3. Remembers encapsulating functions variables after envoked.

Closure's hold state.  Closure == closing over == ice over == frozen state.

*/



var name = function(firstName, lastName) {
	return (function() {
		return "Fullname is " + firstName + " " + lastName;
	})();
}

name("Benjamin", "Schachter");

console.log(example1("Benjamin", "Schachter"));

var powerOf = function(base) {
	return function(power) {
		return base ** power;
	}
}

var power = powerOf(5);
power(4);