// Массивы
// Каждый элемент массива обернуть в массив #9

var firstArray = [1, 3, 'gnome'], secondArray = [];
for (var i = 0; i < firstArray.length; ) {
	secondArray.push([firstArray.shift()]);
	// console.log('iteration: ', i, '\n1:', firstArray, '\n2:', secondArray);
}
	console.log('Result: ', secondArray);
	console.log(secondArray[1] instanceof Array);
