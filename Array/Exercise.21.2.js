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
	if (TypeError.captureStackTrace) {
		TypeError.captureStackTrace(this, NumberError);
	} else {
		this.stack = (new TypeError()).stack;
	}
};

NumberError.prototype = Object.create(Error.prototype);

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

var readArray = function(array) {
	for (var k = 0, k < array.length, k++) {
		if !isNumeric(array[k]) {
			throw new NumberError('Error. Enter an array of numbers');
		}
	}
	return array;
}

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



/*NotNumberArray = new Error('Error. Enter an array of numbers')
Error.prototype.notNumberArray = function () {
	for (var k = 0, k < firstArray.length, k++) {
		if !isNumeric(firstArray[k]) {

	}
};*/

try {
	readArray(firstArray);
	console.log('Average: ',firstArray.average() );
	console.log('Standart deviation: ', firstArray.deviation() );
} catch (e) {
	if (e instanceof NumberError) {
		if 
	}
	console.log('Error. Enter an array of numbers').
}