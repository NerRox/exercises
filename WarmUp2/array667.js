/*Given an array of ints, return the number of times that two 6's are next to each other in the array. Also count instances where the second "6" is actually a 7.*/

console.log(array667([6, 6, 2])) //1
console.log(array667([6, 6, 2, 6])) //1
console.log(array667([6, 7, 2, 6])) //1

function array667(nums) {
  let str = nums.join("")
  return str.split(/66|67/).length-1
}