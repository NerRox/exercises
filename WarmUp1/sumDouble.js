/*Given two int values, return their sum. Unless the two values are the same, then return double their sum.*/

sumDouble(3, 5)
sumDouble(8, 2)
sumDouble(3, 3)


function sumDouble(a,b) {
  if (a != b) {
    return a + b
  }
  
  else {
    return (a + b) * 2
  }
}
