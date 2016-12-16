// Числа
	// Имеем 2 числа, посчитать количество целых чисел между ними
var a = 0.8, b = 2.6, count = 0;
/*if (a * b < 0) {
	
}
// необходимо решить следующую проблему:
// если разница между дробными частями < 1

else {*/
if (Math.ceil(a) - a === 0 && Math.ceil(b) - b === 0) {
	count = Math.abs(a - b) - 1;
	console.log('Condition_1 - integer numbers');
}
else {
	if	(Math.abs(a - b) < 1 && Math.floor(a)-Math.floor(b) != 0) {
		if (a > b) {
			a = Math.floor(a);
			b = Math.ceil(b);
			for (count = 1; b < a; b ++, count ++);
		}
		else {
			a = Math.ceil(a);
			b = Math.floor(b);
			for (count = 1; a < b; a ++, count ++);
		}
	}
	else {
		if (a > b) {
			a = Math.floor(a);
			b = Math.ceil(b);
			for (; b < a; b ++, count ++);
		}
		else {
			a = Math.ceil(a);
			b = Math.floor(b);
			for (; a < b; a ++, count ++);
		}
	}
}
console.log(count);
