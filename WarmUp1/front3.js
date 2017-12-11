/*Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.*/

console.log(front3("Java")) // "JavJavJav"
console.log(front3("Chocolate")) // "ChoChoCho"
console.log(front3("abc")) // "abcabcabc"

function front3(str) {
  if (str.length > 3) {
    let front = str.slice(0,3)
    let result = front + front + front
    return result
  }

  else {
    return str + str + str
  }
}