/*Given a string, return true if the string starts with "hi" and false otherwise.*/

console.log(startHi("hi there"))
console.log(startHi("hi"))
console.log(startHi("hello hi"))

function startHi(str) {
  let hi = "hi"
  let checkHi = str.substring(0,2)

  return hi == checkHi
}
