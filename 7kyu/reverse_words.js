// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
function reverseWords(str) {
  //split string into array
  let split = str.split(" ");
  //loop thru array and split each word and reverse them
  for (let x = 0; x < split.length; x++) {
    split[x] = split[x].split("").reverse().join("");
  }
  // join back together
  return split.join(" ");
}

//better way using map and reversing inside of the return
// function reverseWords(str) {
//   return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
// }