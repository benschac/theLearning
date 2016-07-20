/*
https://coderbyte.com/editor/guest:First%20Reverse:JavaScript
Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 
Sample Test Cases
Input:"coderbyte"
Output:"etybredoc"

Input:"I Love Code"
Output:"edoC evoL I"
*/


function FirstReverse(str) { 

  // code goes here  
  return str.split('').reverse().join("");
   
         
}
   
// keep this function call here 
FirstReverse(readline());   