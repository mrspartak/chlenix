//Строки
	//Имеем 2 переменные, строку и букву. 
	//Вернуть количество вхождений буквы в строке.

var a = new String("What a wonderfull world"), i = 0, n = 0;
console.log(n);
while (i <= a.length) {
	if (a.charAt(i) === "w" || a.charAt(i) === "W") {
		n++;
		console.log("n = ", n);
	}
		console.log("i = ", i);
	i++;
}
console.log("end count:",n)
