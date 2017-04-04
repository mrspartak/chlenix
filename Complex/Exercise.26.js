// Комплексные задачи
// #26
// Смешение цветов. 
// Дано 2 цвета в HEX нотации, вернуть смешение. Это 16-ричное представление RGB цвета, каждые 2 символа это цвет. Смешение это среднее от 2х цветов.
// Пример:
// Ввод: 000000, ffffff
// Вывод: 808080

var colorA = '#0047AB', colorB = '#FFED00';

console.log( mixColors(colorA, colorB) );

function mixColors(colorA, colorB) {
  var colorA1, colorA2, colorA3;
  var colorB1, colorB2, colorB3;
  var colorC1, colorC1, colorC1, colorC;

  colorA1 = parseInt( colorA.slice(1, 3), 16 );
  colorB1 = parseInt( colorB.slice(1, 3), 16 );
  colorA2 = parseInt( colorA.slice(3, 5), 16 );
  colorB2 = parseInt( colorB.slice(3, 5), 16 );
  colorA3 = parseInt( colorA.slice(5), 16 );
  colorB3 = parseInt( colorB.slice(5), 16 );

// вычисление среднего в десятичной системе исчесления
  colorC1 = Math.round( (colorA1 + colorB1) / 2 );
  colorC2 = Math.round( (colorA2 + colorB2) / 2 );
  colorC3 = Math.round( (colorA3 + colorB3) / 2 );

//перевод в шестнадцатиричную систему
  colorC1 = colorC1.toString(16);
  colorC2 = colorC2.toString(16);
  colorC3 = colorC3.toString(16);

  colorC = '#' + colorC1 + colorC2 + colorC3; 

  return colorC;
}
