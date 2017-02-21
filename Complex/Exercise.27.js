// Комплексные задачи
// #27
// Написать простенький шаблонизатор. 
// Любое слово в строке между символами {example} будет заменяться на значение в объекте с ключем example
// Пример:
// Ввод: str = 'Hi {name}'; obj = {name: 'Pavel'};
// Вывод: Hi Pavel


var str = 'Hello my dear friend, {name}!', obj = {name: 'Spartak'};

function templateString(string, object) {
	return string.replace( /{\w+}/, function(str){
		var _str = str.slice(1,-1);
		
		return object[_str];
	})
}

console.log( templateString(str, obj) );