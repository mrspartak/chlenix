// Массивы
// Вывести максимальный и минимальный числовой элемент массива

var myArray = [2, -100, true, 'efwef', 2, 4, 6, 0 / 0, false, 1 / 0, - 1 / 0, {a: 123}, 10000], arr = [], max, min;
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

for ( var i1 = 0, i2 = 0; i1 < myArray.length; i1++, i2++) {
	if ( isNumeric( myArray[i1] ) ) {
		arr[i2] = myArray[i1];
	}
}
max = arr[0];
min = max;
for (var i = 0; i < arr.length; i++) {
	if ( min > arr[i] ) { min = arr[i] }
	if ( max < arr[i] ) { max = arr[i] }
}
console.log('Maximum = ', max, '\nMinumum = ', min);