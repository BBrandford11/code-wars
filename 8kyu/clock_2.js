// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:

// h = 0
// m = 1
// s = 1

// result = 61000

// Input constraints:

//     0 <= h <= 23
//     0 <= m <= 59
//     0 <= s <= 

function past(h, m, s){
  //#Happy Coding! ^_^
  let hours = h * 60
  let mins = (m + hours ) * 60
  let seconds = mins + s
  return seconds * 1000
}
// this would be the best practice would refactor to this after
// function past(h, m, s){
//   return ((h*3600)+(m*60)+s)*1000;
// }