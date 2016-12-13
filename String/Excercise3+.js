var a = "What a wonderfull world", n = -1, b = 0, i = 0;
//a = 'aaaaaaaaaaaaaaa';
//a = 'wwaaW';
a = 'aaW';
a = a.toLowerCase();

console.log(a,'\nLookin for "w"');
console.log('By using "indexOf"');
for (; b !== -1; i = b + 1){
	b = a.indexOf('w', i);
	console.log('b = ', b, '\ti= ', i);	
	n++;	
	console.log ('n = ', n);
//console.log('i =', i);
//alert(console.log(n);)
}
console.log(n);