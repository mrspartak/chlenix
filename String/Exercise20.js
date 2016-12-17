// Строки
// Превратить строку, где слова разделены нижним подчеркиванием в Camel Case
var str = 'iam_dog_tail', i = str.indexOf('_');
while (i <= str.length) {
	if (~str.indexOf('_')) {
		str = str.slice(0, i) + str[i+1].toUpperCase() + str.slice(i+2);
		i = str.indexOf('_');
	}
	else break;
}
console.log(str);

/*
~str.indexOf('_') не использую побитовые операторы там где им не место, ты явно пытаешься найти не совпадение, так сравнивай с тем, что тебе вернется не -1
*/
