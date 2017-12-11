/*Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".*/

console.log(altPairs("kitten")) // "kien"
console.log(altPairs("Chocolate")) // "Chole"
console.log(altPairs("CodingHorror")) // "Congrr"

function altPairs(str) {
  return str.slice(0,2) + str.slice(4,6) + str.slice(8,10)
}