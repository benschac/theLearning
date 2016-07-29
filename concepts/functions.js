/*
Functions
--------------------------

Factory Functions:
- A function that returns an object.

Constructor Function:
- Creates a custom object type.

Function hoisting v. function decloration

*/


// Factory Function
var Animal = {
	createAnimal: function() {
		return new Object();
	}
}

var dog = Animal.createAnimal();

// Constructor Function
function Person(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}


var benjamin = new Person("Benjamin Schachter", 26, "male");

// Second Example
function ConstructorCar () {}

ConstructorCar.prototype.drive = function () {
  console.log('Vroom!');
};


// Hoist
function max(num1, num2) {
	if(num1 > num2) {
		return num1;
	} else {
		return num2;
	}
}

// Declaration
var max = function(num1, num2) {
	if(num1 > num2) {
		return num1;
	} else {
		return num2;
	}
} 