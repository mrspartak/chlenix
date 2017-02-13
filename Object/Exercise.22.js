// Объекты
// #22
//Написать объект, который бы помог решить некоторые задачки по строкам
// Пример:
// StringHelper.toCamel('not_camel');
// notCamel
// StringHelper.revert('not_camel');
// lemac_ton

var StringHelper = {}, stringExample = '_sunny_and_happy_day_';

Object.prototype.toCamel = function(string) {
	var i = string.indexOf('_'), _foundPos;
	
	while (true) {
		_foundPos = string.indexOf('_', i);

		if (_foundPos === -1) break;

		if (i === 0) {
			string = string.substring(1);
		} else if (i === (string.length - 1) ) {
			string = string.substring(0, string.length - 1);
		} else {
			string = string.slice(0, i) + string.charAt(i + 1).toUpperCase() + string.slice(i + 2);
		}
		i = string.indexOf('_');
	}
	return string;
}

Object.prototype.revert = function(string) {
	return string = string.split('').reverse().join('');
}


console.log('String to camel case: ' + StringHelper.toCamel(stringExample) );
console.log('Reverse string: ' + StringHelper.revert(stringExample) );

