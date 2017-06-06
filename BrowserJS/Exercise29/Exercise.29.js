//part 1
var docElem = document.documentElement;
alert('Размер видимой части экрана (без скроллбаров): ' + docElem.clientWidth + ' х ' + docElem.clientHeight + 
'\nРазмер видимой части экрана (с учетом скроллбаров): '+ window.innerWidth +'x'+ window.innerHeight + 
'\nРазрешение вашего экрана: '+ window.screen.width +'x'+ window.screen.height + 
'\nРазмер окна браузера: '+ window.outerWidth +'x'+ window.outerHeight);

//part 2
var userAge = +prompt('How old are you?', 25);
alert('In 5 years you will be ' + (userAge + 5) + ' years old.');

//part 3
var url = window.location;
alert('Hash ' + url.hash +
	'\nHost and port ' + url.host +
	'\nURL: ' + url.href + 
	'\nHost: ' + url.hostname +
	'\nPath name ' + url.pathname +
	'\nPort number ' + url.port + 
	'\nProtocol ' + url.protocol +
	'\nSearch adress ' + url.search);

//part 4
var numberOfDivs = document.body.getElementsByTagName('div').length;
console.log('4: Number of <div> blocks: ' + numberOfDivs);

