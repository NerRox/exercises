/*Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.*/

console.log(endUp("Hello")) // "HeLLO"
console.log(endUp("hi there")) // "hi thERE"
console.log(endUp("hi")) // "HI"

function endUp(str) {
  let up = str.slice(-3).toUpperCase()
  let s = str.slice(0, str.length - 3)

  if (str.length < 3) {
    return str.toUpperCase()
  }

  else {
    return s + up
  }
}