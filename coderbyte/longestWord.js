/*

https://coderbyte.com/editor/guest:Longest%20Word:JavaScript

	Challenge
Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
Sample Test Cases
Input:"fun&!! time"
Output:"time"

Input:"I love dogs"
Output:"love"
*/



function LongestWord(sen) { 

	var alpha = /[^a-z ]/gi;

	var filteredString = sen.replace(alpha, "").split(' ');
	var maxLength = 0;
	var maxWord;
		for(var i = 0; i < filteredString.length; i++) {
			if(filteredString[i].length > maxLength) {
			maxLength = filteredString[i].length;
			maxWord = filteredString[i];
			}
		} 


	return maxWord;  
}

// keep this function call here 
LongestWord(readline());    