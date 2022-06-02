// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  if (num < 10) {
    return 0;
  }
  // setting base counter to return
  let number = 0;
  //splitting number into array of strings to itterate thru
  let split = num.toString().split("");

  //while loop for split being over 9
  while (split.length > 1) {
    let result = 1;
    for (let x = 0; x < split.length; x++) {
      result *= split[x];
      }
    //making split = the multiplication of all the nums in the array
    split = result.toString().split("");
    // increase counter
    number++;
  }
  return number;
}
