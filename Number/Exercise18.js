// Числа
	// Посчитать сумму цифр числа
var n = 1342, sum = 0;
for ( ; n > 0; ){
	sum += n % 10;
	n = Math.floor(n / 10);
}
console.log(sum);

/*
Тут собственно у тебя присутствует избыточность. По факту все что ты написал это while, но только из-за того, что у тебя цикл for выполняется лишняя операция вначале и каждуй раз выполняется итератор.
В твоем случае, раз уж использовал цикл for, ты мог бы написать так
for (n = 1342, sum = 0; n > 0; n = Math.floor(n / 10)) 
	sum += n % 10;
console.log(sum);

Или весь твой код полностью идентичен
var n = 1342, sum = 0;
while(n > 0){
	sum += n % 10;
	n = Math.floor(n / 10);
}
console.log(sum);
*/
