/*Given a string and a non-negative int n, return a larger string that is n copies of the original string.*/

console.log(stringTimes("Hi", 2))
console.log(stringTimes("Hi", 3))
console.log(stringTimes("Hi", 1))

function stringTimes(str, n) {
    return str.repeat(n)
}