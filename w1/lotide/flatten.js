const assertArraysEqual = function(firstArray,secondArray) {
  let truthfulness = true;
  // looping through the first array
  for (let i = 0; i < firstArray.length; i++) {
  //looping second array
    for (let j = 0; j < secondArray.length; j++) {
      if (secondArray[i] !== firstArray[i]) {
        truthfulness = false;
        break;
      }
    }
  } if (truthfulness) {
    console.log(`👍👍👍 Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};


//Function to get an array with nested arrays and return just one array.

const flatten = function(anArray) {
  let newArray = [];
  for (let i = 0; i < anArray.length; i++) {
    if (Array.isArray(anArray[i])) {
      let tempNewArray = flatten(anArray[i]);
      newArray = newArray.concat(tempNewArray);
    } else {
      newArray.push(anArray[i]);
    }
  } return newArray;
};

console.log(flatten([[1,2],[3,4],5,6]));

assertArraysEqual(flatten([[1,2],[3,4],5,6]),[1,2,3,4,5,6]);