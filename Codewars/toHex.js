/*
rgb(255, 255, 255)  returns FFFFFF
rgb(255, 255, 300)  returns FFFFFF
rgb(0,0,0)  returns 000000
rgb(148, 0, 211)  returns 9400D3
*/

function toHex(str) {
	let arr = str.match(/\d{1,3}/g)
	let arr2 = arr.map((n) => +n)

	for (let i = 0; i < arr2.length; i++) {
		if (arr2[i] > 255) {
			arr2[i] = 255
		}
	}

	for (let i = 0; i < arr2.length; i++) {
		if (arr2[i] < 0) {
			arr2[i] = 0
		}
	}



	let arr3 = arr2.map((num) => num.toString(16))

	for (let i = 0; i < arr3.length; i++) {
		if (arr3[i] === 0) {
			arr3[i] = '00'
		}
	}

	return arr3.join('').toUpperCase()
}

function rgb(r, g, b){
	let arr2 = []
	arr2.push(r)
	arr2.push(g)
	arr2.push(b)

	for (let i = 0; i < arr2.length; i++) {
		if (arr2[i] > 255) {
			arr2[i] = 255
		}
	}

	for (let i = 0; i < arr2.length; i++) {
		if (arr2[i] < 0) {
			arr2[i] = 0
		}
	}

	let arr3 = arr2.map((num) => num.toString(16))

	for (let i = 0; i < arr3.length; i++) {
		if (arr3[i] == 0) {
			arr3[i] = '00'
		}
	}

	let res = arr3.join('').toUpperCase()
	return res
}