var phonebook = {};

function phone(str) {
	var inboundStr = str.split(' ');
	var task = inboundStr[0];

	if (task === 'ADD') {
		var name = inboundStr[1];
		var num = inboundStr[2].replace(/,/img, ' ').split(' ');

		if (phonebook.hasOwnProperty(name)) {
			phonebook[name] = phonebook[name].concat(num);
		} else {
			phonebook[name] = num;
		}

		return true;
	}

	if (task === 'REMOVE_PHONE') {
		var delnum = inboundStr[1];

		for (var x in phonebook) {
			var searchIndex = phonebook[x].indexOf(delnum);

			if (searchIndex !== -1) {
				phonebook[x].splice(searchIndex, 1);
			}
		}
		return true;
	}

	if (task === 'SHOW') {
		var res = [];

		for (var propName in phonebook) {
			if (phonebook[propName].length === 0) {
				delete phonebook[propName];
			}
		}

		for (var key in phonebook) {
			res.push(key + ': ' + phonebook[key]);
		}
		// ["Ivan: 555-10-01,555-10-03,555-10-02"]
		return res.sort();
	}
}

//TODO: Переписать весь этот говнокод во что-то нормальное