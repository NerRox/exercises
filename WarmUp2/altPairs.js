/*Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".*/

console.log(altPairs("kitten")) // "kien"
console.log(altPairs("Chocolate")) // "Chole"
console.log(altPairs("CodingHorror")) // "Congrr"

function altPairs(str) {
  let pair01 = str.slice(0,2)
  let pair45 = str.slice(4,6)
  let pair89 = str.slice(8,10)
  let string = pair01 + pair45 + pair89

  return string
}