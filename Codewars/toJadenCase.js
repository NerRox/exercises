/*
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

function toJadenCase (str){
	let arr = str.split(' ')
	let mm = arr.map(function(name) {
		return name.charAt(0).toUpperCase() + name.slice(1)
	})
	let s = mm.join(' ')
	return s
}
