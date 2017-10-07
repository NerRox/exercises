/*Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.*/

console.log(arrayFront9([1, 2, 9, 3, 4]));  //true
console.log(arrayFront9([1, 2, 3, 4, 9]));  //false
console.log(arrayFront9([1, 2, 3, 4, 5]));  //false

function arrayFront9(nums) {
  return nums.slice(0, 4).includes(9)
}
