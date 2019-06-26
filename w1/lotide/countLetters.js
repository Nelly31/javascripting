//checking if output is the same as expected output
const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//counting all the letters in a word
const countLetters = function(input) {
  //changing the input to all lowercase
  const stringInput = input.toLowerCase();
  const result = {};
  //for of loop
  for (const letter of stringInput) {
    //not counting the space
    if (letter !== " ") {
      //if the letter key hasn't already been defined
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  } return result;
};

//logging the count function with various inputs
console.log(countLetters("Nelly"));
console.log(countLetters("This is a string"));
console.log(countLetters("abcABC"));

//testing the output is as expected for Nelly
let objResult = countLetters("nelly");

assertEqual(objResult['n'],1);
assertEqual(objResult['e'],1);
assertEqual(objResult['l'],2);