// Our homemade function to test the truthfulness of whether 2 inputs are the same.

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let eqArrays = function(firstArray,secondArray){
let truthfulness = true
for (let i = 0; i < firstArray.length; i++){
  for (let j = 0; j < secondArray.length; j++){
    if (secondArray[i] !== firstArray[i]){
      truthfulness = false
      break;
    }
  } 
} return(truthfulness);
}

assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true);

assertEqual(eqArrays([1,2,3], [1,2,3]), true);

assertEqual(eqArrays([1,2,3], [3,2,1]), false);

