//Строки
	//Имеем 2 переменные, строку и букву. 
	//Вернуть количество вхождений буквы в строке.

var a = "What a wonderfull world", i = 0, nWhile = 0, nFor = 0;

console.log(a,'\nLookin for "w"\n');
console.log("Cycle WHILE:");
while (i <= a.length) {
	if (a.charAt(i) === "w" || a.charAt(i) === "W") {
		nWhile++;
		console.log("n (while) = ", nWhile);
	}
	i++;
}
i = 0;
console.log("\nCycle FOR:");
a = a.toLowerCase();
for (i = 0; i <= a.length; i++) {
	if (a.charAt(i) === "w") {
		nFor++;
		console.log("n (for) = ", nFor);
	}
}
console.log("end count (while):", nWhile, "\nend count (for):", nFor);


