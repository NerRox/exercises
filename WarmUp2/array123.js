/*Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.*/

console.log(array123([1, 1, 2, 3, 1])) // → true
console.log(array123([1, 1, 2, 4, 1])) // → false
console.log(array123([1, 1, 2, 1, 2, 3])) // → true

function array123(nums) {
  let string = nums.join("")
  return string.includes("123")
}

