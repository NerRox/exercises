/*Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.*/

console.log(delDel("adelbc")) → "abc"
console.log(delDel("adelHello")) → "aHello"
console.log(delDel("adedbc")) → "adedbc"

function delDel(str) {
  let check = str.slice(1, 4)
  let del = "del" 
  let begin = str.slice(0,1)
  let end = str.slice(4)

  if (del == check) {
    return begin + end
  }

  else {
    return str
  }
}