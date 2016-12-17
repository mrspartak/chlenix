function result(a, b) {
	console.log(a + " and " + b);
	var count = 0;	
	if (a > b) {
		if ((b - Math.ceil(b)) === 0) {
			count = -1;
			for (; b < a; count ++, b ++) {
			}
		}
		else {
			b = Math.ceil(b);
			count = 0;
			for (; b < a; b ++, count ++) {
			}
		}
	}
	else if (a < b) {
		if ((a - Math.ceil(a)) === 0) {
			count = -1;
			for (; a < b; count ++, a ++) {
			}
		}
		else {
			a = Math.ceil(a);
			count = 0;
			for (; a < b; a ++, count ++) {
			}
		}
	}
	else count = 0;
	return (count);
}
console.log('need | 2; my result | ', result(0.8, 2.6));
console.log('need | 0; my result | ', result(1, 2));
console.log('need | 0; my result | ', result(0, 0));
console.log('need | 2; my result | ', result(-1, 2));
console.log('need | 4; my result: ', result(-1.3, 2.6));

/*
Все норм, работает.
Совет, старайся называть функции по их назначению, result по факту не значит ничего ) ну это такое
Раз уж ты понял, что важно упорядочить эти 2 числа, то можно просто создать 2 переменные min и max и потом сделать для них единую логику
return (count); чего это ты решил в скобки заключить?
for (; b < a; count ++, b ++) {} вот это жесть, не проще было прибавить к ним a-b?
*/
