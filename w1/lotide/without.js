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

// function to remove items from 1 array if they match a second array and then return a new array with only the unique items.

const without = function(source,removeItems) {
  let amendedSource = [];
  for (let i = 0; i < source.length; i++) {
    let weShouldPush = true;
    for (let j = 0; j < removeItems.length; j++) {
      if (source[i] === removeItems[j]) {
        weShouldPush = false;
        break;
      }
    }
    if (weShouldPush === true) {
      amendedSource.push(source[i]);
    }
  }
  return amendedSource;
};

assertArraysEqual(without([1,2,3,9,5,8],[2,8]),[1,3,9,5],true);
assertArraysEqual(without([1,2,"3",],[1,2,3]),["3"],true);

let sourceTest = [4,5,6];
assertArraysEqual(without([sourceTest],[6],[4,5]),true);
assertArraysEqual(sourceTest,[4,5,6],true);