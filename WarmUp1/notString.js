/*Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged. Note: use .equals() to compare 2 strings.*/

console.log(notString("candy")) → "not candy"
console.log(notString("x")) → "not x"
console.log(notString("not bad")) → "not bad"

function notString(str) {
  let not = "not "
  let checkNot = str.slice(0, 4)

  if (not == checkNot) {
    return str
  }

  else {
    return not + str
  }
}