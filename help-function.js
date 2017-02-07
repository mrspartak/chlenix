//функция возвращает тип объекта
var classOf = function(object) {
	return Object.prototype.toString.call(object).slice(8, -1);
};


console.log(classOf(''));
console.log(classOf(1123));
console.log(classOf([1,2,4,6]));
console.log(classOf({1:2, name: 'Fig'}));