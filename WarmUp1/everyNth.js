/*Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.*/

console.log(everyNth("Miracle", 2)) // "Mrce"
console.log(everyNth("abcdefg", 2)) // "aceg"
console.log(everyNth("abcdefg", 3)) // "adg"

function everyNth(str, n) {
  let result = "";
  
  for (i=0; i<str.length; i = i + n) {
    result = result + str.charAt(i);
  }
  
  return result;
}
