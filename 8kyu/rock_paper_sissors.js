// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }

  if ((p1 === "paper" && p2 === "rock") || (p1 === "rock" && p2 === "scissors") || (p1 === "scissors" && p2 === "paper")) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
  // if (p1 === "rock" && p2 === "scissors") {
  //   return "Player 1 won!";
  // } else {
  //   return "Player 2 won!";
  // }
  
  
  // if (p1 === "scissors" && p2 === "paper") {
  //   return "Player 1 won!";
  // } else {
  //   return "Player 2 won!";
  // }
};

console.log("player 1" ,rps('scissors', 'paper'))
console.log("player 1" ,rps('rock', 'scissors'))
console.log("player 1" ,rps('paper', 'rock'))
