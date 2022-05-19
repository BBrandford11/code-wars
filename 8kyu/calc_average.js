// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


// (for some reason (!array failed so switched to (array.length === 0)))
const find_average = (array) => {
  if (array.length === 0) {
    return 0;
  }
  let total = 0;
  for (let x = 0; x < array.length; x++) {
    total += array[x];
  }
  return total / array.length;
};
