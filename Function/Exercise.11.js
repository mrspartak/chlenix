// Функции
// Создать функцию конструктор "собака". На вход кличка собаки. Собака должна уметь гавкать и возвращать свою кличку. #11
// Пример
// var myDog = new Dog('Barnie');
// myDog.getName(); //Barnie
// myDog.bark(); //Bark Bark!!

var Dog = function(name) {
	this.name = name;
};

Dog.prototype.getName = function() {
	return console.log(this.name);
};
/*
Небольшой хак на будещее. Если ты будешь использовать внутри функции например еще какую-то функцию, то внутри нее this будет само собой указывать на ее контекст, а не на контекст глобального объекта.
Собственно в начале функции делать такой хак: var self = this;
И потом в любом месте использовать свойства и методы основного объекта через self
В твоем случае это излишне, но как хак знать стоит
*/

Dog.prototype.bark = function() {
	return console.log('Bark Bark!!');
};

var myDog = new Dog('Barnie');
myDog.getName();
myDog.bark();
