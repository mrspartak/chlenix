// Массивы
// Вывести максимальный и минимальный числовой элемент массива

var myArray = ['', 2, -99, true, 'efwef', 2, '', 4, 6, 0 / 0, false, 1 / 0, - 1 / 0, {a: 123}, 10000, -102, ''], arr = [], max, min;
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

/*for ( var i1 = 0, i2 = 0; i1 < myArray.length; i1++, i2++) {
	if ( isNumeric( myArray[i1] ) ) {
		arr[i2] = myArray[i1];
	}
}*/
for ( var i1 = 0; i1 < myArray.length; ) {
	if ( isNumeric( myArray[i1] ) ) {
		arr.push(myArray[i1]);
	}
	i1++;
}
max = arr[0];
min = max;
for (var i = 0; i < arr.length; i++) {
	if ( min > arr[i] ) {
		min = arr[i] 
	}
	if ( max < arr[i] ) {
		max = arr[i]
	}
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
