/*Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).*/

missingChar("kitten", 1)
missingChar("kitten", 0)
missingChar("kitten", 4)

function missingChar(str, n) {
  let str2 = str.slice(0, n)
  let str3 = str.substring(n + 1)
  let s = str2 + str3
  return s
}