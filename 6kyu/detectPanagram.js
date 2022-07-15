// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const regEx = /[A-z]/gi;
  const letters = string.toLowerCase().match(regEx);

  let result = "";
  for (let x = 0; x < letters.length; x++) {
    if (!result.includes(letters[x])) {
      result += letters[x];
    }
  }

  if (result.length === 26) {
    return true;
  } else {
    return false;
  }
}
