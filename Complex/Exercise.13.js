// Комплексные задачи
// #13
// Вернуть массив содержащий количество букв в каждом слове строки
// Пример:
// Ввод: Who let the dogs out?
// Вывод: [3, 3, 3, 4, 4]

var string = '...Who let: the dogs out?!';

function returnWordLength(string) {
	 var _arr = string.split(/[ /./,/?/!/:]/g);
	 
	 for (var i = 0; i < _arr.length; i++) {
	 	if (_arr[i] === '') {
	 		_arr.splice(i, 1);
	 		i--;
	 	} else {
	 	_arr[i] = _arr[i].length;
	 	}
	 }

	 return _arr;
}

console.log('Our string: ' + string);
console.log( returnWordLength(string) );

/*
Очень плохая практика перегружать массив другим типом данных. Используй для чисел второй массив просто
*/
