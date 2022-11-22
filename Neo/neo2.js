function solution(S, C) {
  let split = S.split("\n");
  let column = split[0].split(",");
  let selectedColumn = 0;
  // Loop thru to find the correct  Column that matches C
  for (let x = 0; x < column.length; x++) {
    if (column[x] === C) {
      selectedColumn = x;
    }
  }

  let maxValue = -Infinity;
  // Splits the arrays by "," giving me a array of arrays
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i].split(",");
  }
  // loop thru arrays of arrays to find highest value and turn it from string to int
  for (let y = 0; y < split.length; y++) {
    if (Number(split[y][selectedColumn]) > maxValue)
      maxValue = Number(split[y][selectedColumn]);
  }

  return maxValue;
}
