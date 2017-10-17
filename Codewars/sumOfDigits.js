/*It involves implementing a program that sums the digits of a non-negative integer. For example, the sum of 3433 digits is 13.

Digits can be a number or a string, and you should control it is no undefined and return an empty string.

To give you a little more excitement, the program will not only write the result of the sum, but also write all the sums used: 3 + 4 + 3 + 3 = 13.
*/


function sum(digits) {
	let s = digits.split('')
	let s2 = s.map(string => +string)

	let summary = s2.reduce(function (sum, current){
		return sum + current
	})

	let ss = s.join(' + ')
	return ss + ' = ' +  summary
}

Test.assertEquals(sum("3433"), "3 + 4 + 3 + 3 = 13");
Test.assertEquals(sum("64323"), "6 + 4 + 3 + 2 + 3 = 18");
Test.assertEquals(sum("8"), "8 = 8");