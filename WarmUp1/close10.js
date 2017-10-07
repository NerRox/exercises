/*Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.*/

console.log(close10(8, 13))
console.log(close10(13, 8))
console.log(close10(13, 7))

function close10(a, b) {
  let absa = Math.abs(10 - a)
  let absb = Math.abs(10 - b)

  if (absa > absb) {
  	return a
  }
  else if (absa < absb) {
  	return b
  }
  else {
  	return 0
  }
}
