// firstName (string),
// lastName (string),
// criminalRecord (boolean),
// passportExpiration (string)  format YYYY-MM-DD
// visaType (string)  can be either 'business' or 'tourist'
// visaApplication(['Alex', 'Lynch', false, '2018-5-5', 'tourist']) -> ["2018-1-2", 904]

function visaApplication(array) {
	if (array[2] === true) {
		return false
	}

	if (Date.parse(array[3] - Date.now()) < 7776000000) {
		return false
	}

	let arrFirst = array[0].split('').map(x => x.charCodeAt())
	let arrLast = array[1].split('').map(x => x.charCodeAt())

	let sum1 = arrFirst.reduce((sum1, accum1) => {
		return sum1 + accum1
	})

	let sum2 = arrLast.reduce((sum2, accum2) => {
		return sum2 + accum2
	})

	let insuranceID = sum1 + sum2
	let visaExpiration

	switch(array[4]) {
		case 'business':
			visaExpiration = Date.now() + 7776000000
			break;

		case 'tourist':
			visaExpiration = Date.now() + 2592000000
			break;
	}

  //TODO: FIX THIS DATE SH*T

	let vexp = new Date(visaExpiration)

	let year = vexp.getFullYear()
	let month = vexp.getMonth() + 1
	let day = vexp.getDate()
	let fulldate = year + '-' + month + '-' + day

	let result = []
	result.push(fulldate)
	result.push(insuranceID)

	return result
}