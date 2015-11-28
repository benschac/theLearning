//
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
//
// YOUR CODE GOES HERE
//

if (input != '')
{
	return 'Hello, ' + input + "!";
}

return 'Hello, world!';



};

module.exports = HelloWorld;
