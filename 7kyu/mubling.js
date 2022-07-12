// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let result = [];
  let sLowerCase = s.toLowerCase();
  let split = sLowerCase.split("");
  for (let x = 0; x < split.length; x++) {
    let letters = [];
    for (let y = 0; y <= x; y++) {
      if (y === 0) {
        letters.push(split[x].toUpperCase());
      } else {
        letters.push(split[x]);
      }
    }
    result.push(letters.join(""));
  }

  return result.join("-");
}
