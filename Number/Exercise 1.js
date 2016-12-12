// Числа. 
	//Округлить до ближайшего кратного 10
var Num = 1234.32, txt1 = " - исходное значение", txt2 = " - итоговое значение"; 
console.log(Num, txt1);
Num = Math.round(Num / 10) * 10;
console.log(Num, txt2);