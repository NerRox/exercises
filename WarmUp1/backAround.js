/*Given a string, take the last char and return a new string with the last char added at the front and back, so "cat" yields "tcatt". The original string will be length 1 or more.
*/

console.log(backAround("cat"))
console.log(backAround("Hello"))
console.log(backAround("a"))

function backAround(str) {
  if (str.length < 2) {
    return  undefined // Check the string length
  }

  else {
    let char = str.slice(-1)
    let str2 = char + str + char
    return str2
  }
}
