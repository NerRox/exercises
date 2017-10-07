/*Return true if the given string contains between 1 and 3 'e' chars.*/

console.log(stringE("Hello"))
console.log(stringE("Heelle"))
console.log(stringE("Heelele"))

function stringE(str) {
  let count = 0;

  for (i=0; i<str.length; i++) {
    if (str.charAt(i) == 'e') count++;
  }

  return count >= 1 && count <= 3

}
