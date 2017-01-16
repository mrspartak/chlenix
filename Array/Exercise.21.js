// Массивы
// Есть массив чисел. 
// Определить среднее значение и среднеквадратичное отклонение. #21

var firstArray = [-1, 0, 1, 1], sum = 0, average = 0, deviationSum = 0, standartDeviation = 0;

for ( var i = 0; i < firstArray.length; i++) {
	sum += firstArray[i];
}
average = sum / firstArray.length;
for ( var i = 0; i < firstArray.length; i++) {
	deviationSum += Math.pow(firstArray[i] - average, 2);
	console.log(deviationSum);
}
standartDeviation = Math.sqrt(deviationSum / firstArray.length);
console.log('Average: ', average);
console.log('Standart deviation: ', standartDeviation);

