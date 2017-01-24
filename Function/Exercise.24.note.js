// Функции
// #24
//Написать рекурсивную функции чисел фибоначи. Это сложная задачка
// Пример:
//fib(3);
//на вход принимает количество чисел и выводит их
//1 1 2

var result = [], resultStr = '';

function fibonacciValue(n) {
	return n <= 1 ? n : fibonacciValue(n - 1) + fibonacciValue(n - 2);	
}

function fib(r) {
	for (var i = 0; i < r; i++) {
		result[i] = fibonacciValue(i); 		
	}

return resultStr = result.join(' ');
}

console.log( fib(10) );

