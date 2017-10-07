/*Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.*/

console.log(stringX("xxHxix")) //xHix
console.log(stringX("abxxxcd")) //abcd
console.log(stringX("xabxxxcdx")) //xabcdx

function stringX(str) {
  return str[0] + str.slice(1, -1).replace(/x/ig, "") + str[str.length-1]
}