// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s) {
  if (s.length % 3 === 0) {
    let split = s.split("");
    return split[s.length / 2];
  }
  if (s.length % 2 === 0) {
    let result = "";
    let split = s.split("");
    result += split[Math.floor(s.length / 2)];
    result += split[Math.ceil(s.length / 2)];
    return result;
  }
}

function isValidWalk(walk) {
  let ns = 0;
  let we = 0;

  for (let direction of walk) {
    if (direction == "n") ns += 1;
    if (direction == "s") ns -= 1;
    if (direction == "e") we += 1;
    if (direction == "w") we - +1;
  }
  return walk.length == 10 && ns === 0 && we === 0;
}

function isValidWalk(walk) {
  let ns = 0;
  let we = 0;

  for (let direction of walk) {
    if (direction == "n") {
      ns += 1;
    }
    if (direction == "s") {
      ns -= 1;
    }
    if (direction == "e") {
      we += 1;
    }
    if (direction == "w") {
      we - +1;
    }
    return walk.length == 10 && ns === 0 && we === 0;
  }
}
