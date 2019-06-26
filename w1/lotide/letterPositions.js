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

//returnging the index of each letter within a given input.
const letterPositions = function(inputSentence) {
  const result = {};
  let lowerSentence = inputSentence.toLowerCase();
  let sentence = lowerSentence.replace(/\s/g,'');
  for (let i = 0; i < sentence.length; i++) {
    if (result[sentence[i]]) {
      result[sentence[i]].push(i);
    } else {
      result[sentence[i]] = [i];
    }
  }
  return result;
};

console.log(letterPositions("this is a sentence"));

assertArraysEqual(letterPositions("hello").e,[1]);
assertArraysEqual(letterPositions("nelly").l,[2,3]);