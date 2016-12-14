// Строки
	// Заменить каждый второй символ в строке на 0
var str = 'ciu33cb23093jch3';
for (var i = 1; i <= (str.length - 1); i = i + 2) {
	str = str.split('');
	str[i] = 0;
	str = str.join('');
}
console.log(str);

/*
1. Не усложняй
for (var i = 1; i < str.length; i += 2)

2. Каждый раз в цикле ты делаешь 2 накладные операции, когда мог их сделать за циклом
var str = 'ciu33cb23093jch3';
str = str.split('');
for (var i = 1; i < str.length; i += 2) str[i] = 0;
str = str.join('');
*/
