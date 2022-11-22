// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

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
