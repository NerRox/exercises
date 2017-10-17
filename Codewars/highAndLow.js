function highAndLow(numbers){
	let ns = numbers.split(" ")
	return Math.max(...ns) + ' ' + Math.min(...ns)
}
