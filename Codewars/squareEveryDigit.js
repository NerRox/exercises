/*Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out.

Note: The function accepts an integer and returns an integer
*/


function squareDigits(num){
	let x = String(num)
	let y = x.split('')
	let u = []
	for (let i = 0; i < y.length; i++) {
		u.push(Math.pow(y[i], 2))
	}

	let o = u.join('')
	return +o

	// return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}

squareDigits(8118) // 641164