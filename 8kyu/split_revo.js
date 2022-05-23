const revo = (string) => {
  let split = string.split(" ")
  console.log(split)
  let result = ""
  for (let x = 0; x < split.length; x++) {
    let reverse = split[x].split("").reverse().join("")
    result += reverse + " "
  }
  console.log(result)
}
// Log to console
console.log(revo("hello world"))