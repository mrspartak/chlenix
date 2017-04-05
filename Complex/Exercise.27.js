// Комплексные задачи
// #27
// Написать простенький шаблонизатор. 
// Любое слово в строке между символами {example} будет заменяться на значение в объекте с ключем example
// Пример:
// Ввод: str = 'Hi {name}'; obj = {name: 'Pavel'};
// Вывод: Hi Pavel

var str = 'Hello my dear friend, {name}!', obj = {name: 'Spartak'};

console.log( templateString(str, obj) );

function templateString(string, object) {
	var _a, _b;

	_a = string.match( /{\w+}/i );
	_b = _a[0].slice(1,-1);

	if ( object.hasOwnProperty(_b) ) {
		return string.replace(_a, object[_b]);
	} else {
		return string;
	}
}
