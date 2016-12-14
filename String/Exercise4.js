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

/*
1. Зачем ты это делаешь?
str = str.toLowerCase();

2. Накладные операции внутри цикла
str = str.split('');
str = str.join('');
Но в таком случае тебе нужен был бы дополнительный массив, который ты бы наполнил и потом его объединил до строки

3. Твоя задача решается в одну строчку
str = 'what the fuck'.split('').reverse().join('')
Но для этого нужно изучить метода глобальных объектов. split - метод объекта String. reverse, join - методы объекта Array.
*/
