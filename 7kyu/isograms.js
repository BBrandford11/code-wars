// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

const isIsogram = (str) => {
  let letterCheck = [];
  let toLower = str.toLowerCase();

  for (let x = 0; x < toLower.length; x++) {
    if (!letterCheck.includes(toLower[x])) {
      letterCheck.push(toLower[x]);
    } else {
      return false;
    }
  }
  return true;
};

console.log(isIsogram("abasda"));
console.log(isIsogram("asdf"));
console.log(isIsogram("zxcvbv"));
console.log(isIsogram("aAcd"));
