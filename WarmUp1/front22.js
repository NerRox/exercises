/*Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.*/

console.log(front22("kitten")) // "kikittenki"
console.log(front22("Ha")) // "HaHaHa"
console.log(front22("abc")) // "ababcab"

function front22(str) {
  let slice = str.slice(0, 2)
  let s = slice + str + slice

  if (str.length < 2) {
    return str + str + str
  }

  else {
    return s
  }
}