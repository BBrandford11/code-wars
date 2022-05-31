// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  let result = ""
  let number = 0
  for (let y = 0; y < x.length; y++) {
    if (x[y] === " "){
      number++
    }else result += x[y]
    
  }
  return result
}
