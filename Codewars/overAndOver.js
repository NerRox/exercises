hasOneChar('aaaaa'); //true
hasOneChar('aaaab'); //false
hasOneChar('bbbbb'); //true
hasOneChar('bbabb'); //false

function hasOneChar(str) {
	let s = str.split('')
	let obj = {}

	for (let i = 0; i < s.length; i++) {
		let q = s[i]
		obj[q] = true
	}

	let karr = Object.keys(obj)

	return karr.length < 2
}






