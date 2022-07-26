// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  let string = "";
  for (let x = 0; x < s.length; x++) {
    if (s[x] === "!") {
    } else {
      string += s[x];
    }
  }
  return string;
}
