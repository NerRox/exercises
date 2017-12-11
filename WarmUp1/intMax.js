/*Given three int values, a b c, return the largest*/

console.log(intMax(1, 2, 3)) // 3
console.log(intMax(1, 3, 2)) // 3
console.log(intMax(3, 2, 1)) // 3

function intMax(a, b, c) {
  let max

  if (a > b) {
    max = a
  }

  else {
    max = b
  }

  if (c > max) {
    max = c
  }

  return max
}