/*Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).*/

console.log(last2("hixxhi")) // 1
console.log(last2("xaxxaxaxx")) // 1
console.log(last2("axxxaaxx")) // 2

function last2(str) {
  if (str.length < 2) {
    return null
  }

  let substring = str.slice(-2)
  let string = str.slice(0, str.length - 2)
  let pos = -1;
  let count = 0

  while ((pos = string.indexOf(substring, pos + 1)) != -1) {
    count++
  }

  return count
}