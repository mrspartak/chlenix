// Функции
// #23
// Функция, которая принимает количество секунд и через столько секунд выдаст в консоль сообщение. 
// Пример:
// sleep(5);
// через 5 секунд, что-то должно отобразиться в консоли

sleep( 5 );

function sleep( time ) {
	var delay = time * 1000;
	setTimeout( function( ) { console.log('Any string with helpfull information') }, delay );
}