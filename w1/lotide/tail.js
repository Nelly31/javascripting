const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

console.log(tail([1,2,3,4]));
console.log(tail([1]));
console.log(tail([]));


const words = ["Hello", "GoodBye", "Adios"];
tail(words);
assertEqual(words.length,3);