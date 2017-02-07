/*
  В общем сделал методом объекта Math. Также объекту Math добавил вспомогательное свойство __fibDict в которое сохраняю промежуточные значения.
  Увы, начальные 2 нужно задать. Также используя встроенный массив и беря из него посчитанное значение, если оно есть, я дико оптимизирую производительность.
  Попробуй своей функцией и моей посчитать 100е значение фибоначи. Также сделал вывод от 0 и чтобы возвращало реально 3 значения, а не 4.
*/
Math.fibonacci = function(n, returnValue) {
	var val;
	// Инициализирую свойство для хранения значений
	if(typeof Math.__fibDict == 'undefined') Math.__fibDict = [0, 1];
	// Если значение уже было посчитано, использую его
	if(typeof Math.__fibDict[n - 1] != 'undefined') {
		val = Math.__fibDict[n - 1];
	//Иначе считаю его и запихиваю в массив
	} else  {
		val = Math.fibonacci(n - 1, true) + Math.fibonacci(n - 2, true);
		Math.__fibDict[n - 1] = val;
	}
	//В зависимости от доп значение функции возвращаю или значение или массив
	return returnValue === true ? val : Math.__fibDict.slice(0, n);
}

console.log( Math.fibonacci(5) );
console.log( Math.fibonacci(5, true) );
