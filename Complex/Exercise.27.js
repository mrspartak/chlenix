// Комплексные задачи
// #27
// Написать простенький шаблонизатор. 
// Любое слово в строке между символами {example} будет заменяться на значение в объекте с ключем example
// Пример:
// Ввод: str = 'Hi {name}'; obj = {name: 'Pavel'};
// Вывод: Hi Pavel

var str = 'Hello my dear friend, {firstName} {secondName}. You have {numberOfAnimals} {animal}!', obj = {firstName: 'Kagarmanyan', secondName: 'Spartak', animal: 'cats', numberOfAnimals: 'two'};

console.log( templateString(str, obj) );

function templateString(string, object) {
	var _a, _b;

	_a = string.match( /{\w+}/ig );

	for (var i = 0; i < _a.length; i++) {
		_b = _a[i].slice(1,-1);

		if ( object.hasOwnProperty(_b) ) {
			string = string.replace(_a[i], object[_b]);
		}
	}
	return string;
}
