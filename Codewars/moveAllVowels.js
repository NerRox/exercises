/*Given a string as input, move all of its vowel to the end of the string.
Example input: day Example output: dya
Example input: apple Example output: pplae
Note: All input string are of small letters, and the order of the vowels at the end should be the same as they were before.*/

function moveVowels(str) {
	let vowels = str.match(/[aeiou]/ig).join('')
	let consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/ig).join('')
	return consonants + vowels
}

console.log(moveVowels('apple'))