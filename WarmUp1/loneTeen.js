/*We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.*/

console.log(loneTeen(13, 99)) // true
console.log(loneTeen(21, 19)) // true
console.log(loneTeen(13, 13)) // false

function loneTeen(a, b) {
  if ((a >= 13 && a <= 19) && (b >= 13 && b <= 19)) {
    return false
  }

  else {
    return true
  }
}