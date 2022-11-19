// Kata Task

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

//     humanYears >= 1
//     humanYears are whole numbers only

// Cat Years

//     15 cat years for first year
//     +9 cat years for second year
//     +4 cat years for each year after that

// Dog Years

//     15 dog years for first year
//     +9 dog years for second year
//     +5 dog years for each year after that

var humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  let catYears = 0;
  let dogYears = 0;

  for (let x = 0; x < humanYears; x++) {
    if ((x = 0)) {
      catYears += 15;
    }
    if ((x = 1)) {
      catYears += 9;
    }
    if (x > 1) {
      catYears += 4;
    }
  }
  for (let x = 0; x < humanYears; x++) {
    if ((x = 0)) {
      dogYears += 15;
    }
    if ((x = 1)) {
      dogYears += 9;
    }
    if (x > 1) {
      dogYears += 5;
    }
  }

  return [humanYears, catYears, dogYears];
};
