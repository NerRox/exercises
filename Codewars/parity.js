/*
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

function outlier(arr) {
	let even = []
	let odd = []

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			even.push(arr[i])
		}

		else {
			odd.push(arr[i])
		}
	}

	if (even.length > odd.length) {
		return odd[0]
	}

	return even[0]
}