// Объекты
// #22
//Написать объект, который бы помог решить некоторые задачки по строкам
// Пример:
// StringHelper.toCamel('not_camel');
// notCamel
// StringHelper.revert('not_camel');
// lemac_ton

var StringHelper = {}, stringExample = '_what_the_fucking_world_not_camel_';

Object.prototype.toCamel = function(anyString) {
	var i = anyString.indexOf('_');
	
	while (true) {
		var foundPos = anyString.indexOf('_', i);
		
		if (foundPos == -1) break;

		if (i = 0) {
			anyString = anyString.substring(i + 1);
		} else if (i = (anyString.length - 1) ) {
			anyString = anyString.substring(0, anyString.length - 1 );
		} else {
			anyString = anyString.slice(0, i) + ( anyString.charAt(i + 1) ).toUpperCase() + anyString.slice(i + 2);
		}
		i = anyString.indexOf('_');
		console.log(anyString);
	}
/*

	while (i < anyString.length) {
		
		if ( ~anyString.indexOf('_') ) {
			
			if (anyString.indexOf('_') === anyString.length - 1) {
				anyString = anyString.slice(0, i); 
			}
			else {
				anyString = anyString.slice(0, i) + anyString[i+1].toUpperCase() + anyString.slice(i+2);
				i = anyString.indexOf('_');
			}

		} else break;
	}
*/
	return anyString;
}

/*
while (true) {
  var foundPos = anyString.indexOf('_', i);
  if (foundPos == -1) break;

  i = foundPos + 1; // продолжить поиск со следующей
}
*/

Object.prototype.revert = function(anyString) {
	return anyString = anyString.split('').reverse().join('');
}


console.log('String to camel case: ' + StringHelper.toCamel(stringExample) );
console.log('Reverse string: ' + StringHelper.revert(stringExample) );

