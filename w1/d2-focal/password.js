//getting the input from the console
let consoleInput = function() {
  return process.argv.slice(2)[0];
};


//function to change string to code
let obfuscate = userPassword => {
  let codedPassword = "";
  for (let letter of userPassword) {
    if (letter === "a") {
      codedPassword += "4";
    } else if (letter === "e") {
      codedPassword += "3";
    } else if (letter === "o") {
      codedPassword += "0";
    } else if (letter === "l") {
      codedPassword += "1";
    } else codedPassword += letter;
  } return codedPassword;
};

console.log(obfuscate(consoleInput()));

// //getting the input from the console
// let consoleInput = function(){
//   return process.argv.slice(2)[0]
// }

// console.log(consoleInput())

// //alternative function to change string to code using a switch statement
// let obfuscate = function(userPassword) {
// let codedPassword = "";
//  for (let i = 0; i < userPassword.length; i++){
//    switch (userPassword[i]){
//      case "a":
//        codedPassword += "4"
//        break;
//       case "e":
//        codedPassword += "3"
//        break;
//       case "o":
//         codedPassword += "0"
//         break;
//       case "l":
//         codedPassword += "1"
//         break;
//       default:
//         codedPassword += userPassword[i]
//    }
//  } return codedPassword
// };

// console.log(obfuscate(consoleInput()))