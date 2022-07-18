// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
  const lower = string.toLowerCase();
  let result = "";
  for (let x = 0; x < string.length; x++) {
    if (string[x] !== lower[x]) {
      result += ` ${string[x]}`;
    } else {
      result += string[x];
    }
  }
  return result
  
}


// better way using map
// function solution(string) {
//   string = string.split('').map(function (el) {
//     if (el === el.toUpperCase()) {
//       el = ' ' + el
//     }
//     return el
//   })
//   return string.join('')
// }