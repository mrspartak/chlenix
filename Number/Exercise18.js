// Числа
	// Посчитать сумму цифр числа
var n = 1342, sum = 0;
for ( ; n > 0; ){
	sum += n % 10;
	n = Math.floor(n / 10);
}
console.log(sum);