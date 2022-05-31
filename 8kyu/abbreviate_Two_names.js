const abbrevName = (name) => {
  let split = name.split(" ")
  return `${split[0][0].toUpperCase()}. ${split[1][0].toUpperCase()}`
}
console.log(abbrevName("Bryce Brandford"))