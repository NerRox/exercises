/*Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % "mod" operator computes remainders, so 17 % 10 is 7.*/

console.log(lastDigit(7, 17)) // true
console.log(lastDigit(6, 17)) // false
console.log(lastDigit(3, 113)) // true

function lastDigit(a, b) {
  return (a % 10 == b % 10)
}