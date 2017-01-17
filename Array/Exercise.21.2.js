// Массивы
// Есть массив чисел. 
// Определить среднее значение и среднеквадратичное отклонение. #21

/*Отлично, теперь напиши прототиты объекта Array для вычисления среднего и среднеквадратичного.
Если в массиве есть нечисловые значения: выбросить ошибку. (посмотри объект Error)
Пример:
var array = [1, 2, 3];
var average = array.average();
var dev = array.deviation();*/

var firstArray = new Array(-1, 0, 1, 1), average = 0, standartDeviation = 0;

function NumberError(message) {
	this.name = 'NumberError';
	this.message = 'Error. Enter an array of numbers';
	if (Error.captureStackTrace) {
		Error.captureStackTrace(this, NumberError);
	} else {
		this.stack = (new Error()).stack;
	}
}
NumberError.prototype = Object.create(Error.prototype);

var isNumeric = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

var readArray = function(array) {
	for (var k = 0; k < array.length; k++) {
		if ( !isNumeric(array[k]) ) {
			throw new NumberError('Error. Enter an array of numbers');
		}
	}
	return array;
};

Array.prototype.average = function() {
	for ( var sum = 0, i = 0; i < this.length; i++ ) {
			sum += this[i];
		}
	return average = sum / this.length;
};

Array.prototype.deviation = function() {
	for ( var deviationSum = 0, i = 0; i < this.length; i++) {
		deviationSum += Math.pow(this[i] - this.average(), 2); //this.averege() приводит к тому что каждую итерацию цикла проходит цикл ".average"
	}
	return standartDeviation = Math.sqrt(deviationSum / (this.length)); 
};

try {
	readArray(firstArray);
	console.log('Average: ', firstArray.average() );
	console.log('Standart deviation: ', firstArray.deviation() );
} catch (e) {
	if (e instanceof NumberError) {
	console.log(e.message);
	}
}

/* Замечения по коду */
//В твоем случае функция readArray возвращает массив, который ты никуда не сохраняешь. Назваение функции в таком случае не совсем соответствует функционалу. Твоя функция скорее валидирует массив, чем читает его.
//Раз уж ты написал функцию для предварительной валидации числового массива, так проверь, что ты вообще массив получил на вход
//В самих методах ты не делаешь проверку например на то, что массив пуст. Делить на 0 такое себе занятие

/* Это не относится к твоему коду. Просто рассуждения о логике в реальном приложении */
/*
   Что мы хотим? Проверить, что наш массив состоит только из чисел? Тогда у нас 2 варианта ответа: состоит или нет. Т.е. в таком случае try catch не нужен, функция может вернуть Bool true|false.
   Но если это критично для приложения и нужно прекратить его обработку, можно из функции ничего не возвращать и использовать tray catch
   Хотим отфильтровать свой массив и получить массив с числами? Вот тут как раз твой способ и подходит. Ты возвращаешь новый отфильтрованный массив. НО, если он например пуст, ты можешь throw new Error('В массиве нет чисел') и отловить это поведение
*/

//Придерживайся одного стиля
//for (var k = 0; k < array.length; k++) {
//for ( var sum = 0, i = 0; i < this.length; i++ ) {
