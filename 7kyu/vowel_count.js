// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = 0;

  // enter your magic here
  for (let x = 0; x < str.length; x++) {
    if (
      str[x] === a ||
      str[x] === e ||
      str[x] === i ||
      str[x] === o ||
      str[x] === u
    ) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}
