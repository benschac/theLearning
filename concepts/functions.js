/*
Functions
--------------------------

Factory Functions:
- A function that returns an object.

Constructor Function:
- Creates a custom object type.
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

