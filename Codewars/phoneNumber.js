createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(arr) {
	let str = arr.join('')
	return '(' + str.slice(0,3) + ') ' + str.slice(3,6) + '-' + str.slice(6)
}