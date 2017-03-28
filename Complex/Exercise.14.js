// Комплексные задачи
// #14
// Имеем 2 числовые переменные. Получить количество цифр "1" между (> <) заданными числами
// Пример:
// Ввод: 10, 22
// Вывод: 11

var classOf = function(object) {
	return Object.prototype.toString.call(object).slice(8, -1);
};

var a = 10, b = 22;

function countNumeral(a, b, n) {
	var _arr = [], $arr = [], max, min, count = 0, _str = '';
	
	if (a > b) {
		max = a;е
		min = b;
	} 
	else {
		max = b;
		min = a;
	}

	for (var i = 0; i < max - min - 1; i++) {
		_arr[i] = min + i + 1;					// переписать через конкатинацию и регэксп в одну строку
		_arr[i] = _arr[i].toString().split('');
	}

	for (var i2 = 0; i2 < _arr.length; i2++) {
		_arr[i2]=_arr[i2].join();
	}

	console.log(_arr);

	_str = _arr.join();

	console.log(_str);

	for (var i3 = 0; i3 < _str.length; i3++) {
		if (_str[i3] == '1') {
			count ++; 
		}
	}

	return count;
}

console.log( countNumeral(a, b, '1') );
