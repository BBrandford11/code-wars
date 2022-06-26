// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  let result = 0;
  for (let y = 0; y < x.length; y++) {
    result += Number(x[y]);
  }
  return result;
}
