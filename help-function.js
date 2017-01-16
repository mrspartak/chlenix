//функция возвращает тип объекта
var classof = function(object) {
	return Object.prototype.toString.call(object).slice(8, -1);
};


console.log(classof(''));
console.log(classof(1123));
console.log(classof([1,2,4,6]));
console.log(classof({1:2, name: 'Fig'}));