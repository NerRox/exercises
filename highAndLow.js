

function highAndLow(numbers){
	let x = String(numbers)
	let y = x.replace(/ /ig, '')

	let z =  y.split('')

	let min = Math.min.apply(null, z)
	let max = Math.max.apply(null, z)

	return max + ' ' + min
}