var phonebook = {};

function phone(str) {
	var inboundStr = str.split(' ');

	var task = inboundStr[0];

	if (task == 'ADD') {
		var name = inboundStr[1];
		var num = inboundStr[2].replace(/,/img, ' ').split(' ');
		num = num.map(function(name) {
			return ' ' + name;
		});

		if (phonebook.hasOwnProperty(name)) {
			phonebook[name] = phonebook[name].concat(num);
		} else {
			phonebook[name] = [num];
		}

		return true;
	}

	if (task == 'REMOVE_PHONE') {
		var delnum = ' ' + inboundStr[1];
		var emptyArr = [];
		var emptyArr2 = [];

		for (var y in phonebook) {
			emptyArr.push(phonebook[y].length);
		}

		var counter = emptyArr.reduce(function(sum, current) {
			return sum + current;
		});

		for (var x in phonebook) {
			var searchIndex = phonebook[x].indexOf(delnum);

			if (searchIndex != -1) {
				phonebook[x].splice(searchIndex, 1);
			}
		}

		for (var z in phonebook) {
			emptyArr2.push(phonebook[z].length);
		}

		var counter2 = emptyArr2.reduce(function(sum1, current1) {
			return sum1 + current1;
		});

		if (counter - counter2 == 1) {
			return true;
		} else {
			return false;
		}
	}

	if (task == 'SHOW') {
		var res = [];

		for (var propName in phonebook) {
			if (phonebook[propName].length == 0) {
				delete phonebook[propName];
			}
		}

		for (var key in phonebook) {
			res.push(key + ':' + phonebook[key]);
		}

		return res.sort();
	}
}

//TODO: Переписать нахуй весь этот говнокод во что-то нормально