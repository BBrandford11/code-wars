// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  let result = "";

  for (let y = 0; y < x.length; y++) {
    if (x[y] === " ") {
    } else result += x[y];
  }
  return result;
}


// tried doing this first and was close but found out it works after
// function noSpace(x){


//   return x.split(" ").join("")
// }