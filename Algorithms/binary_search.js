// Binary search

// make a function that takes a sorted array and a single number and retrun true or false if the number is located in the array

const binary = (array, num) => {
  // setting up start and end for guessing
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    // create middle inside of loop so it gets recreated each loop instead of outside like i first did Math.floor rounds down so you dont get middle being a decimal
    let middle = Math.floor((left + right) / 2);
    //checks if the middle of array is the number we are looking for and returns true if it is
    if (array[middle] === num) {
      return true;
    }
    // if the number is greater then the middle array value we know we can delete the bottom half of the array and reset the middle and repeat proccess
    if (num > array[middle]) {
      left = middle + 1;
    }
    // if the number is less then the middle array value we know we can delete the top half of the array and reset the middle and repeat proccess
    if (num < array[middle]) {
      right = middle - 1;
    }
  }
  //returns false if the number is not found at the end of the loop
  return false;
};

const nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26,
];

console.log(binary(nums, 10));
