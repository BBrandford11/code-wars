// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// write a solution given a array of integers that adds the total of numbers that is divisable by 4 and returns the total
// https://www.geeksforgeeks.org/sum-of-all-the-elements-in-an-array-divisible-by-a-given-number-k/


function solution(A) {
  let result = 0;
  for (let x = 0; x < A.length; x++) {
    if (A[x] % 4 === 0) {
      result += A[x];
    }
  }
  return result;
}

console.log(solution([-6, -91]));
