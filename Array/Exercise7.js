// Массивы
// Вывести максимальный и минимальный числовой элемент массива

var myArray = [2, 4, true, 'efwef', 2, 4, 6, 0 / 0, false, 1 / 0, - 1 / 0, {a: 123}], max, min;
var arr = [];
/*max = myArray[0];
min = max;
for (var i = 0; i < myArray.length; i++) {
	if (min > myArray[i] && myArray[i]) {min = myArray[i]}
	if (max < myArray[i] && myArray[i]) {max = myArray[i]}
}
console.log('Maximum = ', max, '\nMinumum = ', min);
console.log(myArray[7], myArray[8], myArray[9]);*/


for ( var i1 = 0, i2 = 0; i1 < myArray.length; i1++, i2++) {
	if (!isFinite(myArray[i1]) || myArray[i1] === true || myArray[i1] ) {}
	else {arr[i2] = myArray[i1]};
	}
}
console.log(myArray);
console.log(arr);


/*Array.max = function( array ){
    return Math.max.apply( null, array );
};
Array.min = function( array ){
    return Math.min.apply( null, array );
};
console.log(Array.max(arr));
console.log(Array.min(arr));
*/

