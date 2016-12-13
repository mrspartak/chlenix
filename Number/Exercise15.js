// Числа
	// Имеем 2 переменные. Вывести кратно или нет одна другой
var a1 = 100, b1 = 2, a2 = 106, b2 = 3, c1 = 0, c2 = 0;
console.log(a1, b1, a2, b2);
c1 = a1 % b1;
c2 = a2 % b2;

if (c1 != 0) {
	console.log('100 ne kratno 2 (faulse)');
}
else {
	console.log('100 kratno 2 (true)');
}
if (c2 != 0) {
	console.log('106 ne kratno 3 (faulse)');
}
else {
	console.log('106 kratno 3 (true)');
}