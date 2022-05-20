// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

const getSum = (a, b) => {
  let total = 0;
  if (a < b) {
    for (let x = a; x < b + 1; x++) {
      console.log(total);
      total += x;
    }
  }

  if (a > b) {
    for (let x = b; x < a + 1; x++) {
      console.log(x);
      total += x;
    }
  }

  if (a === b) {
    return a;
  }

  return total;
};
