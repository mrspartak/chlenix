// Строки
	// Заменить каждый второй символ в строке на 0
var str = 'ciu33cb23093jch3';
for (var i = 1; i <= (str.length - 1); i = i + 2) {
	str = str.split('');
	str[i] = 0;
	str = str.join('');
}
console.log(str);