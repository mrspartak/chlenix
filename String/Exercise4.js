// Строки
	// Обратить строки
var str = "what the fuck", a = str.length - 1;
console.log(str);
str = str.toLowerCase();
for (var i = 0; i < a; i ++, a --) {
	str = str.split('');
	var b = str[i];
	str[i] = str[a];
	str[a] = b;
	str = str.join('');
}
console.log(str);