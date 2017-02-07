/*
  В общем сделал методом объекта Math. Также объекту Math добавил вспомогательное свойство __fibDict в которое сохраняю промежуточные значения.
  Увы, начальные 2 нужно задать. Также используя встроенный массив и беря из него посчитанное значение, если оно есть, я дико оптимизирую производительность.
  Попробуй своей функцией и моей посчитать 100е значение фибоначи. Также сделал вывод от 0 и чтобы возвращало реально 3 значения, а не 4.
*/
Math.fibonacci = function(n, returnValue) {
	var val;
	if(typeof Math.__fibDict == 'undefined') Math.__fibDict = [0, 1];
	if(typeof Math.__fibDict[n - 1] != 'undefined') {
		val = Math.__fibDict[n - 1];
	} else if (n <= 2) {
		val = n - 1;
	} else  {
		val = Math.fibonacci(n - 1, true) + Math.fibonacci(n - 2, true);
	}
	Math.__fibDict[n - 1] = val;
	return returnValue === true ? val : Math.__fibDict;
}

console.log( Math.fibonacci(5) );
console.log( Math.fibonacci(5, true) );
