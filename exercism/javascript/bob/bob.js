//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {



	if (input == '' || input == '   ') 
	{
		return 'Fine. Be that way!';
	}

	if(input.toUpperCase() == input && input[input.length -1] == "?" && !(input[0] >= 0 && input[0] <= 9))
	{
		return 'Whoa, chill out!';
	}

	if(input[input.length - 1] == "?")
	{
		return 'Sure.';
	}

	if(input.toUpperCase() == input && !(input[0] >= 0 && input[0] <= 9))
	{
		return 'Whoa, chill out!';
	}

	if(input.toUpperCase() == input && input[input.length -1] == "!")
	{
		return 'Whoa, chill out!';
	}


	return 'Whatever.';
};

module.exports = Bob;
