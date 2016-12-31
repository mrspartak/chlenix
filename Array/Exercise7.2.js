// Массивы
// Вывести максимальный и минимальный числовой элемент массива

var myArray = ["", 2, -100, true, 'efwef', 2, -8687, 4, 6, 0 / 0, false, 1 / 0, - 1 / 0, {a: 123}, 10000], max, min;
function isNumeric(n) {
	return !isNaN(parseFloat(n) ) && isFinite(n);
};
max = myArray[0];
min = max;
for ( var i = 0; i < myArray.length;) {
	if ( isNumeric( myArray[i] ) ) {
		if ( min > myArray[i] ) {
			min = myArray[i]; 
		}
		if ( max < myArray[i] ) {
			max = myArray[i];
		}
	}
	i++;
}

console.log('Maximum = ', max, '\nMinumum = ', min);

/*
isNumeric шикарно
1. Тебе не нужно задавать переменную i2, если ты хочешь наполнить другой массив. Для этого есть метод push у Array.
arr.push( myArray[i1] )
2. if ( isNumeric( myArray[i1] ) ) {arr[i2] = myArray[i1];}
Когда не будет выполнятся условие у тебя в массиве будут undefined, в этом случае тебе нужно было i2++ в теле этого условия делать
3. Второй массив тебе не нужен, ты мог все условия проверить в первом цикле.
4. Придерживайся одного стиля написания кода if ( min > arr[i] ) { min = arr[i] }, раз уж пишешь кавычки, то переноси на новые строки
*/
