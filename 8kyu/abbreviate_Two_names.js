// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


const abbrevName = (name) => {
  let split = name.split(" ")
  return `${split[0][0].toUpperCase()}. ${split[1][0].toUpperCase()}`
}
console.log(abbrevName("Bryce Brandford"))


// function abbrevName(name){

//   return name.split(' ').map(i => i[0].toUpperCase()).join('.')

// }