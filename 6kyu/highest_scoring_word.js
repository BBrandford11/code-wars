// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.
function high(x) {
  let split1 = x.split(" ");
  let result = "";
  let index = 0;
  
  for (let y = 0; y < split1.length; y++) {
    let score = 0;
    for (let j = 0; j < split1[y].length; j++) {
      score += split1[y][j].charCodeAt(0) - 96;
    }
    if (score > index ) {
      index = score
      result = split1[y];
    }
  }
  return result;
}
