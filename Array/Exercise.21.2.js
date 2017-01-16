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

Array.prototype.anything = function() {
	console.log('Hello dear world');
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
	for 
	console.log('Average: ',firstArray.average() );
	console.log('Standart deviation: ', firstArray.deviation() );
} catch (err) {

}

/*
просто инфа для себя
var function123 = function(array) {
	for ( var i = 0; i < array.length; i++) {
		if array[i]  проверка является ли значение числом throw new Error('Error. In the above array has a non-numeric values.');
	}
	 
}
var myError = new Error('Error. In the above array has a non-numeric values.');
console.log(myError.message);

try{

} catch (e) {

} finally {

}*/

