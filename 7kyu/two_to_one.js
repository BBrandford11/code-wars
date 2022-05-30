// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
  let string = "";
  for (let x = 0; x < s1.length; x++) {
    if (string.includes(s1[x]) === false) {
      string += s1[x];
    }
  }
  for (let y = 0; y < s2.length; y++) {
    if (string.includes(s2[y]) === false) {
      string += s2[y];
    }
  }

  return string.split("").sort().join("")
}

console.log(longest("aretheyhere", "yestheyarehere"))