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

Dog.prototype.bark = function() {
	return console.log('Bark Bark!!');
};

var myDog = new Dog('Barnie');
myDog.getName();
myDog.bark();