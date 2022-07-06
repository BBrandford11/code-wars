// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// function rot13(message) {
//   //your code here
//   let result = [];
//   for (let x = 0; x < message.length; x++) {
//     let number = message.charCodeAt(x);
//     console.log(number);
//     if (message[x] === " ") {
//       result.push(" ")
//     }
//     if (number >= 78 && number < 91) {
//       result.push(String.fromCharCode(0 + (number - 106) + 93));
//       console.log("if");
//     } else if (number >= 65 && number < 78) {
//       result.push(String.fromCharCode(number + 13));
//       console.log("else");
//     } else if (number > 106) {
//       result.push(String.fromCharCode(0 + (number - 106) + 93));
//     } else {
//       result.push(String.fromCharCode(number + 13));
//     }
//   }

//   console.log(message);
//   console.log(result, "result");
//   return result.join("");
// }


var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ";
var cipher   = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXWZABCDEFGHIJKLM";

function rot13(message){
  return message.split('').map(function(char) {
    var i = alphabet.indexOf(char);
    if (i < 0) {
      // not in alphabet, return char
      return char;
    }
    
    return cipher[i];
  }).join('');
}