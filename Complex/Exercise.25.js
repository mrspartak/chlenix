// Комплексные задачи
// Задача 25
// Имеем число. Вернуть строку, в которой между каждой парой четных цифр будет вставлено тире.
// ввод: 2342231231
// вывод: 234-2-231231

var inputNumber = 2342231231;

console.log( insertDash(inputNumber) );

function insertDash(number) {
	var _result, matchIndex;

	_result = '' + number;

	matchIndex = _result.search(/[2,4,6,8][2,4,6,8]/);

	while(matchIndex >= 0) {
		_result = _result.slice(0, matchIndex + 1) + '-' + _result.slice(matchIndex + 1);
		matchIndex = _result.search(/[2,4,6,8][2,4,6,8]/);
	}

	 return _result;
}
