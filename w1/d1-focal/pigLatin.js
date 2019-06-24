const input = process.argv.slice(2);
let pigLatin = function(input){
  indvWord = ""
  newString = ""
  for (let i = 0; i < input.length; i++){
    indvWord += input[i].slice(1) + input[i][0] + 'ay '
  } return newString += indvWord
} 

console.log(pigLatin(input))