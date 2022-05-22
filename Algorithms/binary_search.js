// Binary search

// make a function that takes a sorted array and a single number and retrun true or false if the number is located in the array

const binary = (array, num) => {
  let left = 0;
  let right = array.length - 1;


  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    console.log(left, right)
    if (array[middle] === num) {
      return true;
    }

    if (num < array[middle]) {
      left = middle;
    }
    if (num > array[middle]) {
      right = middle - 1;
    }
  }
  return false;
};

const nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26
];

console.log(binary(nums, 10));
