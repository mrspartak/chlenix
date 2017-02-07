// Функции
// #24
//Написать рекурсивную функции чисел фибоначи. Это сложная задачка
// Пример:
//fib(3);
//на вход принимает количество чисел и выводит их
//1 1 2

//способ решения задачи с использованием рекурсии в две функции


// работать с внешней переменной (массивом) для изменения значения 
var result = [], resultStr = '';

/*function fibonacciValue(n) {
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
console.log( fib(25) );*/

//способ решения задачи с использованием рекурсии в одну функцию

function fib(n) {
	fib.
	var resultFib = function fibonacci(n) {
		if (n <= 1) {
			result.push(n)
			return result;
		} else {
			result.push( fibonacci(n - 1) + fibonacci(n - 2) )
			return result;
		}
	}
	return resultFib;
}

console.log( fibonacci(2) );







//способ решения задачи без рекурсии: 

/*function fibSecond(n) {
  var sq5 = Math.sqrt(5);
  var a = (1 + sq5) / 2;
  var b = (1 - sq5) / 2;
  
  for (var i = 0; i < n + 1; i++) {
  	console.log( Math.round( (Math.pow(a, i) - Math.pow(b, i)) / sq5 ) );
  }

}

fibSecond(3);*/