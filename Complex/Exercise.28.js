// Комплексные задачи
// #28
// Дана длина 3х сторон треугольника. 
// Вернуть тип трейгольника: не существует, остроугольный, тупоугольный, прямоугольный
// Пример:
// Ввод: 1, 2, 3
// Вывод: не существует

var a1 = 7, a2 = 3, a3 = 6; 

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

function typeOfTriangle(a, b, c) {
	var _type = '', _arr = [a, b, c], _max;

	_max = _arr.max();
	_arr[_arr.indexOf(_max)] = _arr[0];
	_arr[0] = _max;

	if (_arr[1] + _arr[2] <= _arr[0]) {
		_type = 'Triangle doesn\'t exist';
	} else {

		var _count = Math.pow(_arr[1], 2) + Math.pow(_arr[2],2) - Math.pow(_arr[0],2);
		
		if (_count > 0) {
			_type = 'It\'s acute-angled triangle';
		} else if (_count < 0) {
			_type = 'It\'s obtuse-angled triangle';
		} else _type = 'It\'s right-angled triangle'
	}
	return _type;
}

console.log( typeOfTriangle(a1, a2, a3) );