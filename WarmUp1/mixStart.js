/*Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.*/

mixStart("mix snacks")
mixStart("pix snacks")
mixStart("piz snacks")

function mixStart(str) {
  let str2 = "ix"
  let str3 = str.slice(1,3)

  return str2 === str3
}
