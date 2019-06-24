const input = process.argv.slice(2);
const reverse = function(input){

  let reverseInput = ""
  let newInput = ""
  for (let i = 0; i < input.length; i++){
    newInput = input[i]
    let reverseString = '';
    for (let j = newInput.length-1; j >= 0; j--){
      reverseString += newInput[j] 
    }
    reverseInput += reverseString
    if (i !== input.length -1){
      reverseInput += '\n'
    }
  } return reverseInput
}

console.log(reverse(input));