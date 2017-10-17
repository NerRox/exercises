hasOneChar('aaaaa'); //true
hasOneChar('aaaab'); //false
hasOneChar('bbbbb'); //true
hasOneChar('bbabb'); //false

//TODO: figure out how to compare all elements of collection

function hasOneChar(str) {
	let s = str.split('')
		for (let i = 0; i < s.length; i++) {
			if (s[0] == s[i]) {
				return true
			}
			else {
				return false
			}
		}
	}






