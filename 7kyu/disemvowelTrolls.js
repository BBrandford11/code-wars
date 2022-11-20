// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let disSentence = "";
  for (let x = 0; x < str.length; x++) {
    if (
      str[x] === "a" ||
      str[x] === "A" ||
      str[x] === "e" ||
      str[x] === "E" ||
      str[x] === "i" ||
      str[x] === "I" ||
      str[x] === "o" ||
      str[x] === "O" ||
      str[x] === "u" ||
      str[x] === "U"
    ) {
      disSentence += ""
    }else {
      disSentence += str[x]
    }
  }
}
