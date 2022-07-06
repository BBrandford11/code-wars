// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

//     Find the unique number (this kata)
//     Find the unique string
//     Find The Unique
function findUniq(arr) {
  console.log(arr);
  for (let x = 0; x < arr.length; x++) {
    if (arr[0] !== arr[1] && arr[0] !== arr[2]) {
      return arr[0];
    }
    if (arr[x] !== arr[x + 1]) return arr[x + 1];
  }
}
