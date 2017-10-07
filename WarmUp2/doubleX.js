/*Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".*/

console.log(doubleX("axxbb")) // true
console.log(doubleX("axaxax")) // false
console.log(doubleX("xxxxx")) // true

function doubleX(str) {
  return str.indexOf("xx") > -1
}
