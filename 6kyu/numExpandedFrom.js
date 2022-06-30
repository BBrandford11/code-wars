// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
  let result = [];
  let numString = String(num);
  numString.split();
  for (let x = 0; x < numString.length; x++) {
    if (numString[x] >= 1) {
      let zeros = "";
      for (let y = 0; y < numString.length - (x + 1); y++) {
        zeros += "0";
      }
      result.push(numString[x] + zeros);
    }
  }
  return result.join(" + ");
}
