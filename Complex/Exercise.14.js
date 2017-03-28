// Комплексные задачи
// #14
// Имеем 2 числовые переменные. Получить количество цифр "1" между (> <) заданными числами
// Пример:
// Ввод: 10, 22
// Вывод: 11

var a = 10, b = 22;

function countNumeral(a, b, n) {
	var _str = '', max, min, count = 0;

	if (a > b) {
		max = a;
		min = b;
	} else {
		max = b;
		min = a;
	}

	for (var i = 0; i < max - min - 1; i++) {
		_str = _str + (min + i + 1);
	}

	count = _str.match(/1/g).length;

	return count;
}

console.log( countNumeral(a, b, '1') );
