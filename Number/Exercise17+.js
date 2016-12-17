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
