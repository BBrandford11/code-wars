// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
function reverseWords(str) {
  let split = str.split(" ");
  for (let x = 0; x < split.length; x++) {
    split[x] = split[x].split("").reverse().join("");
  }
  return split.join(" ");
}


