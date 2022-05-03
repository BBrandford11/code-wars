// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  str = str.toLowerCase();

  if (!str.includes("x") && !str.includes("o")) {
    return true;
  }

  let numberOfX = 0;
  let numberOfO = 0;

  for (let y = 0; y < str.length; y++) {
    if (str[y] === "x") {
      numberOfX++;
    } else if (str[y] === "o") {
      numberOfO++;
    }
  }

  if (numberOfX === numberOfO) {
    return true;
  } else {
    return false;
  }
}


// cool better way makes all the x, and os into arrays and compaires the length

// function XO(str) {
//   return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }