// Массивы
// Удалить все повторные элементы массива

var firstArray = [-1/0, -1/0, , , -1, -1, 'fucking birds in my beard', 'fucking birds in my beard', 0, 0, 0, 0, 0, 1, 2, 3, 4, 1, 3, 5, 6,6], currentNubmber;

for (var i1 = 0; i1 < (firstArray.length - 1); i1++) {
	currentNubmber = firstArray[i1];
/*	console.log('\n', firstArray);
	console.log('Trigger. 1-st cycle iteration: ', i1);*/
	for (var i2 = i1 + 1; i2 < (firstArray.length); i2++) {
		if (currentNubmber === firstArray[i2]) {
			firstArray.splice(i2, 1);
/*			console.log(i2, 'yes');
			console.log(firstArray);*/
			i2--;
			}
/*		else {
			console.log(i2, 'no. | ', firstArray[i2] );
		}
	console.log('Trigger. 2-nd cycle iteration: ', i2);*/
	}
}
console.log('Result: ', firstArray);