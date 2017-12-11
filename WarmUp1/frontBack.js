/*Given a string, return a new string where the first and last chars have been exchanged.*/

frontBack("code") // "eodc"
frontBack("a") // "a"
frontBack("ab") // "ba"

function frontBack(str) {
  let first = str.slice(0,1)
  let last = str.slice(-1)
  let str2 = str.substring(1, str.length - 1)
  let res = last + str2 + first
  return res
}