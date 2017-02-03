// Функции
// #24
//Написать рекурсивную функции чисел фибоначи. Это сложная задачка
// Пример:
//fib(3);
//на вход принимает количество чисел и выводит их
//1 1 2

/*var result = [], resultStr = '';

function fibonacciValue(n) {
	if (n <= 1) {
		return n;
	} else {
		return fibonacciValue(n - 1) + fibonacciValue(n - 2);
	}
}

function fib(r) {
	for (var i = 0; i < r; i++) {
		result[i] = fibonacciValue(i); 		
	}

return resultStr = result.join(' ');
}

console.log( fib(10) );

*/
function fibSecond(n) {
  var sq5 = Math.sqrt(5);
  var a = (1 + sq5) / 2;
  var b = (1 - sq5) / 2;
  
  for (var i = 0; i < n + 1; i++) {
  	console.log( (Math.pow(a, i) - Math.pow(b, i)) / sq5);
  }

}

fibSecond(5);