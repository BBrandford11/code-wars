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
  }
  return walk.length == 10 && ns === 0 && we === 0;
}


console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
